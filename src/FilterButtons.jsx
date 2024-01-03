import React, { useState } from 'react';
import './App.css'
const FilterButtons = ({ filterTasks, showClearCompleted,clearCompleted }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    filterTasks(filter);
  };

  return (
    <div className='typeButton'>
      <button
        onClick={() => handleFilterClick('All')}
        className={activeFilter === 'All' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => handleFilterClick('Active')}
        className={activeFilter === 'Active' ? 'active' : ''}
      >
        Active
      </button>
      <button
        onClick={() => handleFilterClick('Completed')}
        className={activeFilter === 'Completed' ? 'active' : ''}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
