import { Menu } from 'antd'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <Menu
      mode="horizontal"
      items={[
        {
          key: '1',
          label: <Link to="/">Home</Link>,
        },
        {
          key: '2',
          label: <Link to="/tasks">Tareas</Link>,
        },
        {
          key: '3',
          label: <Link to="/stats">Estadísticas</Link>,
        },
      ]}
    />
  )
}

export default Navbar