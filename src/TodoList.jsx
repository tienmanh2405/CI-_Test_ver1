// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import './Todo.css'
const TodoList = ({ tasks, toggleTask, deleteTask, showDeleteButton }) => {
  return (
    <>
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          index={index}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          showDeleteButton={showDeleteButton}
        />
      ))}
      </ul>
    </>
  );
}

export default TodoList;
