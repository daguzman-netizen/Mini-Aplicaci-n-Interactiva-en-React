import {
  HomeOutlined,
  UnorderedListOutlined,
  BarChartOutlined,
} from '@ant-design/icons'

import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const { Sider } = Layout

function Navbar() {

  const location = useLocation()

  return (

    <Sider
      width={240}
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        background: '#0f172a',
      }}
    >

      <div
        style={{
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
          padding: 25,
          textAlign: 'center',
        }}
      >
        TaskFlow
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        style={{
          background: '#0f172a',
          borderRight: 'none',
        }}
        items={[
          {
            key: '/',
            icon: <HomeOutlined />,
            label: <Link to="/">Dashboard</Link>,
          },
          {
            key: '/tasks',
            icon: <UnorderedListOutlined />,
            label: <Link to="/tasks">Tareas</Link>,
          },
          {
            key: '/stats',
            icon: <BarChartOutlined />,
            label: <Link to="/stats">Estadísticas</Link>,
          },
        ]}
      />

    </Sider>
  )
}

export default Navbar