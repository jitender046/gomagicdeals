import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import './ToDo.css';
function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask) {
      setTasks([...tasks, { task: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleCompleted = (index) => {
    setTasks(
      tasks.map((task, i) => {
        if (i === index) {
          return {...task, completed:!task.completed };
        }
        return task;
      })
    );
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i!== index));
  };

  return (
    <div className='Todoapp'>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text" id='search'
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit" id='add'>Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox" id='checkbox'
              checked={task.completed}
              onChange={() => handleToggleCompleted(index)}
            />
            <span style={{ textDecoration: task.completed? 'line-through' : 'none' }}>
              {task.task}
            </span>
            <button  id='deleteicon' onClick={() => handleDeleteTask(index)}><FontAwesomeIcon icon={faTrash} /></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;