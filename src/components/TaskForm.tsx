import { useState } from 'react'
import { Button, Input, Select, Space } from 'antd'

interface Props {
  addTask: (title: string, priority: string) => void
}

function TaskForm({ addTask }: Props) {

  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('Alta')

  const handleSubmit = () => {

    if (title.trim() === '') return

    addTask(title, priority)

    setTitle('')
    setPriority('Alta')
  }

  return (
    <Space style={{ marginBottom: 20 }}>

      <Input
        placeholder="Nombre de tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Select
        value={priority}
        onChange={(value) => setPriority(value)}
        style={{ width: 120 }}
        options={[
          { value: 'Alta', label: 'Alta' },
          { value: 'Media', label: 'Media' },
          { value: 'Baja', label: 'Baja' },
        ]}
      />

      <Button type="primary" onClick={handleSubmit}>
        Agregar tarea
      </Button>

    </Space>
  )
}

export default TaskForm