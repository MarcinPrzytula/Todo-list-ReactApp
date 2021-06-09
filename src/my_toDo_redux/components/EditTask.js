import React, { useState } from 'react';
import '../style/EditTask.css';

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
        className={`blurWrapper ${
          test.isVisible ? 'show' : ''
        }`}
      >
        <div className="formWrapper">
          <form
            onSubmit={handleEditTask}
            name="send"
          >
            <input
              onChange={handleChange}
              value={inputValue}
              type="text"
            />
            <button className="saveButton">
              <i className="far fa-save"></i>
            </button>
          </form>
          <button
            className="quit"
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
