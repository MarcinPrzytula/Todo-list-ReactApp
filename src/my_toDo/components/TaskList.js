import React from 'react';
import Task from './Task';

const TaskList = ({
  tasks,
  deleteTask,
  getId,
  setIsChecked,
}) => {
  const doneTasks = tasks.filter(
    task => task.isChecked
  );
  const activeTasks = tasks.filter(
    task => !task.isChecked
  );

  const activeTasksList = activeTasks.map(
    ({ name, id, isImportant, isChecked }) => (
      <Task
        name={name}
        id={id}
        key={id}
        deleteTask={deleteTask}
        getId={getId}
        isImportant={isImportant}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
    )
  );

  const doneTasksList = doneTasks.map(
    ({ name, id, isImportant, isChecked }) => (
      <Task
        name={name}
        id={id}
        key={id}
        deleteTask={deleteTask}
        getId={getId}
        isImportant={isImportant}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
    )
  );
  return (
    <>
      <p>
        Number of tasks:{' '}
        <span className="tasksCounter">
          {tasks.length}
        </span>
      </p>
      <p>Aktywne zadania:</p>
      {activeTasksList}
      {tasks.length ? (
        <p>
          {doneTasksList.length
            ? 'Taski zrobione'
            : 'Nie zrobiłeś jeszcze żadnego zadania'}
        </p>
      ) : null}
      {doneTasksList}
    </>
  );
};

export default TaskList;
