import React, { useState } from 'react';
import styles from '../style/AddTask.module.css';

import { useDispatch } from 'react-redux';
import { addTask } from '../actions/appActions';
import { useSelector } from 'react-redux';

const AddTask = ({ validateInput }) => {
  const [inputValue, setInputValue] =
    useState('');
  const [dateInputValue, setDateInputValue] =
    useState('');

  const [isImportantTask, setIsImportantTask] =
    useState(false);

  const dispatch = useDispatch();
  const tasks = useSelector(store => store.tasks);

  const minDate = new Date()
    .toISOString()
    .slice(0, 10);
  const maxDate = `${
    parseInt(minDate.slice(0, 4)) + 1
  }-12-31`;

  const [counter, setCounter] = useState(0);

  const handleAddTask = () => {
    const value = validateInput(
      inputValue,
      tasks
    );

    if (dateInputValue.length === 0)
      return alert('Wybierz datę końca zadania');
    if (value) {
      const task = {
        name: value,
        id: counter,
        isImportant: isImportantTask,
        isChecked: false,
        date: dateInputValue,
      };

      dispatch(addTask(task));
      setCounter(counter + 1);
    }

    if (isImportantTask)
      setIsImportantTask(!isImportantTask);

    setInputValue('');
  };

  const handleImportant = () => {
    setIsImportantTask(!isImportantTask);
  };

  return (
    <div className={styles.add_container}>
      <input
        value={inputValue}
        onChange={e => {
          setInputValue(e.currentTarget.value);
        }}
        type="text"
        placeholder="Wprowadź nazwę zadania"
      />
      <button
        className={`${
          isImportantTask
            ? styles.activeButtonImportant
            : null
        } ${styles.buttonImportant}`}
        onClick={handleImportant}
      >
        {isImportantTask ? (
          <div>
            {' '}
            <p>Zadanie priorytetowe</p>{' '}
            <i className="fas fa-exclamation-circle"></i>
          </div>
        ) : (
          <p>Zadanie normalne</p>
        )}
      </button>
      <div className={styles.dateContainer}>
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
        className={styles.buttonAdd}
        onClick={handleAddTask}
      >
        <div>
          <p>Dodaj zadanie</p>
          <i className="far fa-plus-square"></i>
        </div>
      </button>
    </div>
  );
};

export default AddTask;
