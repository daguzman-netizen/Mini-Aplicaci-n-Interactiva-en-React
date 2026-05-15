import type { Task } from '../types/Task'
import { Card, Col, Row, Statistic } from 'antd'

interface Props {
  tasks: Task[]
}

function Stats({ tasks }: Props) {

  const completed = tasks.filter(task => task.completed).length

  const pending = tasks.filter(task => !task.completed).length

  return (
    <div style={{ padding: 30 }}>

      <Row gutter={16}>

        <Col span={8}>
          <Card>
            <Statistic
              title="Total de tareas"
              value={tasks.length}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic
              title="Completadas"
              value={completed}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic
              title="Pendientes"
              value={pending}
            />
          </Card>
        </Col>

      </Row>

    </div>
  )
}

export default Stats