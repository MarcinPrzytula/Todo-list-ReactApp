import React from 'react';
import styles from '../style/DoneTask.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../actions/appActions';

const DoneTask = ({
  name,
  isImportant,
  isChecked,
  date,
  finishDate,
  id,
}) => {
  const dispatch = useDispatch();

  const importantStyle = isImportant
    ? styles.important
    : null;

  const checkedStyle = isChecked
    ? styles.checked
    : null;
  return (
    <>
      <div className={styles.task}>
        <p
          className={`${importantStyle} ${checkedStyle}`}
        >
          {name} (zrobić do:{date}) - wykonano:
          {finishDate}
        </p>{' '}
        <button
          onClick={() => {
            dispatch(deleteTask({ id }));
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </>
  );
};

export default DoneTask;
