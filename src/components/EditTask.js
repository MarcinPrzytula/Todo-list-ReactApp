import React, { useState } from 'react';
import styles from '../style/EditTask.module.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { editTask } from '../actions/appActions';
import { currentId } from '../actions/testActions';

const EditTask = ({ validateInput }) => {
  const tasks = useSelector(store => store.tasks);
  const test = useSelector(store => store.test);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] =
    useState('');

  const handleChange = e => {
    setInputValue(e.currentTarget.value);
  };

  const handleEditTask = e => {
    e.preventDefault();

    const value = validateInput(
      inputValue,
      tasks
    );
    if (test.id === '')
      return alert(
        'najpierw wybierz zadanie do edycji!'
      );

    if (value) {
      dispatch(editTask({ id: test.id, value }));

      dispatch(
        currentId({ id: null, isVisible: false })
      );
      setInputValue('');
    }
  };

  const handleClick = () => {
    dispatch(
      currentId({ id: null, isVisible: false })
    );
  };
  return (
    <>
      <div
        className={`${styles.blurWrapper} ${
          test.isVisible ? styles.show : null
        }`}
      >
        <div className={styles.formWrapper}>
          <form
            onSubmit={handleEditTask}
            name="send"
          >
            <div className={styles.menuWrapper}>
              <input
                onChange={handleChange}
                value={inputValue}
                type="text"
                placeholder="Wprowadź nową nazwę zadania"
              />
              <button
                className={styles.saveButton}
              >
                <i className="far fa-save"></i>
              </button>
            </div>
          </form>
          <button
            className={styles.quit}
            onClick={handleClick}
          >
            <i className="far fa-times-circle"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default EditTask;
