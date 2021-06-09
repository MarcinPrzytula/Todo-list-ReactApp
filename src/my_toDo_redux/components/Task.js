import React from 'react';
import '../style/Task.css';
import { useDispatch } from 'react-redux';

import {
  deleteTask,
  setTaskIsChecked,
} from '../actions/appActions';

import { currentId } from '../actions/testActions';

const Task = ({
  name,
  id,
  isImportant,
  date,
}) => {
  const dispatch = useDispatch();

  const handleTaskChecked = () => {
    const finishDate = new Date(
      new Date().getTime()
    ).toLocaleString();

    dispatch(
      setTaskIsChecked({ id, finishDate })
    );
  };

  const handleEditClick = () => {
    dispatch(currentId({ id, value: true }));
  };

  const importantStyle = isImportant
    ? 'important'
    : null;
  return (
    <>
      <div className="task">
        <p className={importantStyle}>
          {name} (zrobić do:{date})
        </p>{' '}
        <button
          onClick={() => {
            dispatch(deleteTask({ id }));
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <button onClick={handleTaskChecked}>
          <i className="far fa-check-square"></i>
        </button>
        <button onClick={handleEditClick}>
          <i className="far fa-edit"></i>
        </button>
      </div>
    </>
  );
};

export default Task;
