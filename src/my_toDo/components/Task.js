import React from 'react';
import '../style/Task.css';
const Task = ({
  name,
  id,
  deleteTask,
  getId,
  isImportant,
  setIsChecked,
}) => {
  const importantStyle = isImportant
    ? 'important'
    : null;

  return (
    <>
      <div className="task">
        <p className={importantStyle}>{name}</p>{' '}
        <button
          onClick={() => {
            deleteTask(id);
          }}
        >
          <i class="far fa-trash-alt"></i>
        </button>
        <button
          onClick={() => {
            setIsChecked(id);
          }}
        >
          <i class="far fa-check-square"></i>
        </button>
        <button
          onClick={() => {
            getId(id);
          }}
        >
          <i class="far fa-edit"></i>
        </button>
      </div>
    </>
  );
};

export default Task;
