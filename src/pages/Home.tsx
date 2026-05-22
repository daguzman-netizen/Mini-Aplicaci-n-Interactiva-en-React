import { Card, Typography, Row, Col, Statistic,} from 'antd'
import {CheckCircleOutlined, ClockCircleOutlined,} from '@ant-design/icons'
import type { Task } from '../types/Task'

const { Title, Paragraph } = Typography

interface Props {
  tasks: Task[]
}

function Home({ tasks }: Props) {

  const completed = tasks.filter(
    task => task.completed
  ).length

  const pending = tasks.filter(
    task => !task.completed
  ).length

  return (

    <div>

      <Title level={2}>
        Bienvenido 👋
      </Title>

      <Paragraph
        style={{
          color: '#64748b',
          marginBottom: 40,
        }}
      >
        Organiza tareas, prioridades y productividad.
      </Paragraph>

      <Row gutter={20}>

        <Col span={12}>

          <Card
            style={{
              borderRadius: 20,
            }}
          >
            <Statistic
              title="Tareas completadas"
              value={completed}
              prefix={<CheckCircleOutlined />}
            />
          </Card>

        </Col>

        <Col span={12}>

          <Card
            style={{
              borderRadius: 20,
            }}
          >
            <Statistic
              title="Pendientes"
              value={pending}
              prefix={<ClockCircleOutlined />}
            />
          </Card>

        </Col>

      </Row>

    </div>
  )
}

export default Home