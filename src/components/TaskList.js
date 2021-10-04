import React from 'react';
import { useSelector } from 'react-redux';

import Task from './Task';
import DoneTask from './DoneTask';

import styles from '../style/TaskList.module.css';

// { getId, setIsChecked }
const TaskList = () => {
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
        // getId={getId}
        isImportant={isImportant}
        isChecked={isChecked}
        // setIsChecked={setIsChecked}
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
    <div className={styles.taskList_container}>
      <p className={styles.activeTasksHead}>
        {activeTasksList.length
          ? 'Tasks to be performed:'
          : 'You have no work to do'}
      </p>
      <div className>{activeTasksList}</div>
      {tasks.length ? (
        <div className={styles.doneTasksHead}>
          <p>
            {doneTasksList.length
              ? 'Completed tasks:'
              : 'You havent completed any task yet.'}
          </p>
        </div>
      ) : null}
      {doneTasks.length > 5 && (
        <span style={{ fontSize: 10 }}>
          Only the last 5 are displayed tasks
        </span>
      )}
      {doneTasksList.slice(0, 5)}
    </div>
  );
};

export default TaskList;
