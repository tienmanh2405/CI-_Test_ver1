// TodoItem.js
import React from 'react';
import './Todo.css'
const TodoItem = ({ index, task, toggleTask, deleteTask,showDeleteButton }) => {
  return (
    <li className='item'>
      <div className='item_delete'>
        <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(index)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      </div>
      {showDeleteButton && (
        <button onClick={() => deleteTask(index)}><i className="fa-regular fa-trash-can"></i></button>
      )}
    </li>
  );
}

export default TodoItem;
