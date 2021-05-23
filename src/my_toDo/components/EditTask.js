import React, { useState } from 'react';
import '../style/EditTask.css';

const EditTask = ({
  editTask,
  tasks,
  isVisible,
  setIsVisible,
  validateInput,
}) => {
  const [inputValue, setInputValue] =
    useState('');

  const handleChange = e => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const value = validateInput(
      inputValue,
      tasks
    );

    const taskId = e.currentTarget;
    console.log(taskId);
    // const idTask = tasks.find(
    //   ({ id: task }) => task === id
    // );

    if (value) {
      editTask(inputValue);

      setInputValue('');
    }
  };

  const handleClick = () => {
    setIsVisible(false);
  };
  return (
    <>
      <div
        className={`blurWrapper ${
          isVisible ? 'show' : ''
        }`}
      >
        <div className="formWrapper">
          <form
            onSubmit={handleSubmit}
            name="send"
          >
            <input
              onChange={handleChange}
              value={inputValue}
              type="text"
            />
            <button>SAVE EDIT</button>
          </form>
          <button
            className="quit"
            onClick={handleClick}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default EditTask;
