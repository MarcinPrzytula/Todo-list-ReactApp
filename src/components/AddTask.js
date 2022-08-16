import React, { useState } from 'react';

import { addTask } from '../actions/appActions';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../style/AddTask.module.css';

const AddTask = ({ validateInput }) => {
  const [inputValue, setInputValue] = useState('');

  const [dateInputValue, setDateInputValue] = useState('');

  const [isImportantTask, setIsImportantTask] = useState(false);

  const dispatch = useDispatch();
  const tasks = useSelector(store => store.tasks);

  const minDate = new Date().toISOString().slice(0, 10);
  const maxDate = `${parseInt(minDate.slice(0, 4)) + 1}-12-31`;

  const [counter, setCounter] = useState(0);

  const handleAddTask = e => {
    e.preventDefault();
    const value = validateInput(inputValue, tasks);
    const id = Math.random().toString(36).substr(2, 9);

    if (dateInputValue.length === 0)
      return alert('Select the end date for the task');
    if (value) {
      const task = {
        name: value,
        id: id,
        isImportant: isImportantTask,
        isChecked: false,
        date: dateInputValue,
      };

      dispatch(addTask(task));
      window.localStorage.setItem('tasks', JSON.stringify([...tasks, task]));

      setCounter(counter + 1);
    }

    if (isImportantTask) setIsImportantTask(!isImportantTask);

    setInputValue('');
  };

  const handleImportant = () => {
    setIsImportantTask(!isImportantTask);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input_add}
        value={inputValue}
        onChange={e => {
          setInputValue(e.currentTarget.value);
        }}
        type="text"
        placeholder="Enter the name of the task."
      />
      <button
        className={`${styles.button_important} ${
          isImportantTask ? styles.button_important_active : null
        }`}
        onClick={handleImportant}
      >
        {isImportantTask ? (
          <div>
            <p>Priority task</p>{' '}
          </div>
        ) : (
          <p>Normal task</p>
        )}
      </button>
      <div className={styles.date_container}>
        <p>Perform the task until:</p>{' '}
        <input
          type="date"
          min={minDate}
          max={maxDate}
          value={dateInputValue}
          onChange={e => {
            setDateInputValue(e.currentTarget.value);
          }}
        />
      </div>

      <button className={styles.button_add} onClick={handleAddTask}>
        <p>Add task</p>
        <span className="far fa-plus-square"></span>
      </button>
      <div className={styles.numberOfTasks}>
        <p>
          Number of tasks:{' '}
          <span className={styles.tasksCounter}>{tasks.length}</span>
        </p>
      </div>
    </div>
  );
};

export default AddTask;
