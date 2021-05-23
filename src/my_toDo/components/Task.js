import React from 'react';
import '../style/Task.css';
const Task = ({
  name,
  id,
  deleteTask,
  getId,
  isImportant,
  isChecked,
  setIsChecked,
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
          Nazwa zadania: {name} (ID:{id})
        </p>{' '}
        <button
          onClick={() => {
            deleteTask(id);
          }}
        >
          X
        </button>
        <button
          onClick={() => {
            setIsChecked(id);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            getId(id);
          }}
        >
          EDIT
        </button>
      </div>
    </>
  );
};

export default Task;
