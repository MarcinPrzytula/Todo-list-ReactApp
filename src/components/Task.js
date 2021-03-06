import React from 'react';
import { useDispatch } from 'react-redux';

import {
  deleteTask,
  setTaskIsChecked,
} from '../actions/appActions';

import { currentId } from '../actions/editPopupActions';
import styles from '../style/Task.module.css';

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
    ? styles.important
    : null;
  return (
    <>
      <div className={styles.task}>
        <div className={importantStyle}>
          <p>{name}</p>
          <p>(time to do:{date})</p>
        </div>{' '}
        <button
          onClick={() => {
            dispatch(deleteTask({ id }));
            // const x = JSON.parse(
            //   window.localStorage.tasks
            // );
            // const y = x.find(x => x.id === id);
            // console.log(y);
            // window.localStorage.removeItem(
            //   'tasks'
            // );
          }}
        >
          <span className="far fa-trash-alt"></span>
        </button>
        <button onClick={handleTaskChecked}>
          <span className="far fa-check-square"></span>
        </button>
        <button onClick={handleEditClick}>
          <span className="far fa-edit"></span>
        </button>
      </div>
    </>
  );
};

export default Task;
