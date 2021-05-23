import React from 'react';
import '../style/Task.css';
const Task = ({
  name,
  id,
  deleteTask,
  getId,
  isImportant,
  setIsChecked,
  date,
}) => {
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
            deleteTask(id);
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <button
          onClick={() => {
            setIsChecked(id);
          }}
        >
          <i className="far fa-check-square"></i>
        </button>
        <button
          onClick={() => {
            getId(id);
          }}
        >
          <i className="far fa-edit"></i>
        </button>
      </div>
    </>
  );
};

export default Task;
