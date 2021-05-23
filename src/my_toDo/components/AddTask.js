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
  const [dateInputValue, setDateInputValue] =
    useState('');

  const minDate = new Date()
    .toISOString()
    .slice(0, 10);
  const maxDate = `${
    parseInt(minDate.slice(0, 4)) + 1
  }-12-31`;

  const handleAddTask = () => {
    const value = validateInput(
      inputValue,
      tasks,
      dateInputValue
    );
    if (value) {
      handleNewTask(
        value,
        isImportant,
        dateInputValue
      );

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
        onChange={e => {
          setInputValue(e.currentTarget.value);
        }}
        type="text"
        placeholder="Enter your task"
      />

      <div className="dateContainer">
        <p>Do kiedy zrobić:</p>{' '}
        <input
          type="date"
          min={minDate}
          max={maxDate}
          value={dateInputValue}
          onChange={e => {
            setDateInputValue(
              e.currentTarget.value
            );
          }}
        />
      </div>

      <button
        className={'buttonAdd'}
        onClick={handleAddTask}
      >
        {' '}
        <i className="far fa-plus-square"></i>
      </button>

      <button
        className={`${
          isImportant ? 'important' : null
        } buttonImportant`}
        onClick={handleImportant}
      >
        <i className="fas fa-exclamation-circle"></i>
      </button>
    </div>
  );
};

export default AddTask;
