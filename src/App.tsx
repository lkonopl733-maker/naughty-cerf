import { useState } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);

  // Додавання задачі
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  // Зміна статусу
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Видалення задачі
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Мій To-Do List на React</h1>

      <TaskForm addTask={addTask} />

      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
