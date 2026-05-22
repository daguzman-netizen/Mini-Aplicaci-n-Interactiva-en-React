import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Stats from './pages/Stats'

import type { Task } from './types/Task'

const { Content } = Layout

function App() {

  const [tasks, setTasks] = useState<Task[]>([])

  return (

    <Layout
      style={{
        minHeight: '100vh',
        background: '#f1f5f9',
      }}
    >

      <Navbar />

      <Layout
        style={{
          marginLeft: 240,
          padding: '30px',
        }}
      >

        <Content>

          <Routes>

            <Route path="/" element={<Home tasks={tasks} />}
            />
            <Route
              path="/tasks"
              element={
                <Tasks
                  tasks={tasks}
                  setTasks={setTasks}
                />
              }
            />

            <Route
              path="/stats"
              element={<Stats tasks={tasks} />}
            />

          </Routes>

        </Content>

      </Layout>

    </Layout>
  )
}

export default App