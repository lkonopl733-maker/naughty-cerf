import { useState } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm.jsx";
import TaskItem from "./components/TaskItem.jsx";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
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

      {tasks.length === 0 && (
        <p className="empty-message">
          Список справ порожній. Додайте перше завдання!
        </p>
      )}
    </div>
  );
}

export default App;
