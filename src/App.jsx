import React, { useState, useEffect } from 'react';
import './App.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [showClearCompleted, setShowClearCompleted] = useState(false);
  useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  setTasks(storedTasks);
}, []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    const completedTasks = tasks.filter(task => task.completed);
    setShowClearCompleted(completedTasks.length > 0);
  }, [tasks]);
  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const clearCompleted = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  const filterTasks = (filter) => {
    setFilter(filter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return false;
  });

  return (
    <div className='formpage'>
      <h1 style={{textAlign:'center'}}>#todo</h1>
      <FilterButtons filterTasks={filterTasks} />
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        showDeleteButton={filter === 'Completed'}
      />
      {filter === 'Completed' && showClearCompleted && (
      <button className='button_clear' onClick={clearCompleted}><i className="fa-regular fa-trash-can"></i> Delete all</button>
    )}
    </div>
  );
};

export default TodoApp;
