import type { Task } from '../types/Task'
import { Button, Card, Space, Tag } from 'antd'

interface Props {
  task: Task
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
}

function TaskItem({ task, toggleTask, deleteTask }: Props) {

  return (
    <Card style={{ marginBottom: 20, borderRadius: 16, border: '1px solid #e2e8f0',}}>

      <Space direction="vertical" style={{ width: '100%' }}>

        <h3
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? 'green' : 'black',
          }}
        >
          {task.completed ? '✔' : '📌'} {task.title}
        </h3>

        <Tag color={
          task.priority === 'Alta'
            ? 'red'
            : task.priority === 'Media'
            ? 'orange'
            : 'green'
        }>
          {task.priority}
        </Tag>

        <Space>

          <Button
            type="primary"
            onClick={() => toggleTask(task.id)}
          >
            Completar
          </Button>

          <Button
            danger
            onClick={() => deleteTask(task.id)}
          >
            Eliminar
          </Button>

        </Space>

      </Space>

    </Card>
  )
}

export default TaskItem