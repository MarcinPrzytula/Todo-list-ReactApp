import React from 'react';
import '../style/DoneTask.css';
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
    ? 'important'
    : null;

  const checkedStyle = isChecked
    ? 'checked'
    : null;
  return (
    <>
      <div className="task">
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
