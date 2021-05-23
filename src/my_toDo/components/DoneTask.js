import React from 'react';
import '../style/DoneTask.css';

const DoneTask = ({
  name,
  isImportant,
  isChecked,
  date,
  finishDate,
  deleteTask,
  id,
}) => {
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
            deleteTask(id);
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </>
  );
};

export default DoneTask;
