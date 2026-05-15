import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Stats from "./pages/Stats";

import type { Task } from "./types/Task";

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

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
    </div>
  );
}

export default App;