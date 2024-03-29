import React from 'react';
import styles from '../styles/DoneTask.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../actions/appActions';
import { DefaultStateI } from '../interfaces';

const DoneTask = ({
  name,
  isImportant,
  isChecked,
  date,
  finishDate,
  id,
}: DefaultStateI) => {
  const dispatch = useDispatch();

  const importantStyle = isImportant ? styles.important : null;

  const checkedStyle = isChecked ? styles.checked : null;
  return (
    <>
      <div className={styles.task}>
        <div className={`${importantStyle} ${checkedStyle}`}>
          <p>{name}</p>{' '}
          <button
            onClick={() => {
              dispatch(deleteTask(id));
            }}
          >
            <span className="far fa-trash-alt"></span>
          </button>
          <p>
            (time to do: {date}) - done: {finishDate}
          </p>
        </div>{' '}
      </div>
    </>
  );
};

export default DoneTask;
