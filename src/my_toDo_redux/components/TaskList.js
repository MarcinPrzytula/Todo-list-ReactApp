import React from 'react';
import Task from './Task';
import DoneTask from './DoneTask';

import { useSelector } from 'react-redux';

const TaskList = ({ getId, setIsChecked }) => {
  const tasks = useSelector(store => store.tasks);

  const doneTasks = tasks.filter(
    task => task.isChecked
  );

  if (doneTasks.length >= 2) {
    doneTasks.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      return 0;
    });
  }

  const activeTasks = tasks.filter(
    task => !task.isChecked
  );
  if (activeTasks.length >= 2) {
    activeTasks.sort((a, b) => {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasksList = activeTasks.map(
    ({
      name,
      id,
      isImportant,
      isChecked,
      date,
    }) => (
      <Task
        name={name}
        id={id}
        key={id}
        getId={getId}
        isImportant={isImportant}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        date={date}
      />
    )
  );

  const doneTasksList = doneTasks.map(
    ({
      name,
      id,
      isImportant,
      isChecked,
      date,
      finishDate,
    }) => (
      <DoneTask
        name={name}
        id={id}
        key={id}
        isImportant={isImportant}
        isChecked={isChecked}
        date={date}
        finishDate={finishDate}
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
      {doneTasks.length > 5 && (
        <span style={{ fontSize: 10 }}>
          wyświetlonych jest jedynie 5 ostatnich
          zadań
        </span>
      )}
      {doneTasksList.slice(0, 5)}
    </>
  );
};

export default TaskList;
