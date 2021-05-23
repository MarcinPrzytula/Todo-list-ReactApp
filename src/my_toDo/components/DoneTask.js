import React from 'react';
import '../style/DoneTask.css';

const DoneTask = ({
  name,
  id,
  isImportant,
  isChecked,
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
          {name}
        </p>{' '}
      </div>
    </>
  );
};

export default DoneTask;
