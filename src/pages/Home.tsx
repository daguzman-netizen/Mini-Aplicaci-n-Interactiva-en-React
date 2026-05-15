import { Button, Card, Typography, Space } from 'antd'
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
      }}
    >
      <Card style={{ width: 600, textAlign: 'center' }}>

        <Title>Sistema de Gestión de Tareas</Title>

        <Paragraph>
          Organiza tus tareas y controla tu productividad.
        </Paragraph>

        <Space size="large">
          <Link to="/tasks">
            <Button type="primary" size="large">
              Ir a tareas
            </Button>
          </Link>

          <Link to="/stats">
            <Button size="large">
              Ver estadísticas
            </Button>
          </Link>
        </Space>

      </Card>
    </div>
  )
}
export default Home