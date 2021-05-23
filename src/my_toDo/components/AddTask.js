import React, { useState } from 'react';
import '../style/AddTask.css';

const AddTask = ({
  handleNewTask,
  tasks,
  isImportant,
  setImportant,
  validateInput,
}) => {
  const [inputValue, setInputValue] =
    useState('');

  const handleInput = e => {
    setInputValue(e.currentTarget.value);
  };

  const handleAddTask = () => {
    const value = validateInput(
      inputValue,
      tasks
    );
    if (value) {
      handleNewTask(value, isImportant);

      if (isImportant) setImportant(!isImportant);

      setInputValue('');
    }
  };

  const handleImportant = () => {
    setImportant(!isImportant);
  };

  return (
    <div className="add_container">
      <input
        value={inputValue}
        onChange={handleInput}
        type="text"
        placeholder="Enter your task"
      />
      <button
        className={'buttonAdd'}
        onClick={handleAddTask}
      >
        {' '}
        <i class="far fa-plus-square"></i>
      </button>

      <button
        className={`${
          isImportant ? 'important' : null
        } buttonImportant`}
        onClick={handleImportant}
      >
        <i class="fas fa-exclamation-circle"></i>
      </button>
    </div>
  );
};

export default AddTask;
