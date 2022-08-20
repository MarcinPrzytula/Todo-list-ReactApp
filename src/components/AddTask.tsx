import React, { useState } from 'react';

import { addTask } from '../actions/appActions';
import { useDispatch, useSelector } from 'react-redux';
import { validateInputValue } from '../helpers/validateInputValue.helper';

import styles from '../style/AddTask.module.css';
import { RootStore } from '../store/store';
import { DefaultStateI } from '../interfaces';
const AddTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootStore): DefaultStateI[] => state.tasks);
  const [values, setValues] = useState({ name: '', date: '' });

  const [isImportantTask, setIsImportantTask] = useState(false);

  const minDate = new Date().toISOString().slice(0, 10);
  const maxDate = `${parseInt(minDate.slice(0, 4)) + 1}-12-31`;

  const [counter, setCounter] = useState(0);

  const handleAddTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = validateInputValue(values.name, tasks);
    const id = Math.random().toString(36).substr(2, 9);

    if (values.name.length === 0)
      return alert('Select the end date for the task');
    if (value) {
      const task = {
        id: id,
        name: value,
        isImportant: isImportantTask,
        isChecked: false,
        date: values.date,
        finishDate: '',
      };

      dispatch(addTask(task));
      window.localStorage.setItem('tasks', JSON.stringify([...tasks, task]));

      setCounter(counter + 1);
    }

    if (isImportantTask) setIsImportantTask(!isImportantTask);

    setValues({ name: '', date: '' });
  };

  const handleImportant = () => {
    setIsImportantTask(!isImportantTask);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.container}>
      <input
        name="name"
        className={styles.input_add}
        value={values.name}
        onChange={e => {
          handleChange(e);
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
          name="date"
          type="date"
          min={minDate}
          max={maxDate}
          value={values.date}
          onChange={e => {
            handleChange(e);
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
