import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    const nextId = tasks.length + 1;
    const task = { id: nextId, text: newTask, completed: false };
    setTasks([...tasks, task]);
  };

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleCompletion(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
