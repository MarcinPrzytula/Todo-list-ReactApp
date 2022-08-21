import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../store/store';

import Task from './Task';
import DoneTask from './DoneTask';
import { addTasksFromLocalStorage } from '../actions/appActions';

import { DefaultStateI } from '../interfaces';
import styles from '../styles/TaskList.module.css';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootStore): DefaultStateI[] => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorage = window.localStorage.getItem('tasks');

    if (typeof localStorage === 'string') {
      const parse = JSON.parse(localStorage);
      if (parse.length > 0) {
        dispatch(addTasksFromLocalStorage(parse));
      }
    }
  }, [dispatch]);

  const doneTasks = (tasks as DefaultStateI[]).filter(
    (task: DefaultStateI) => task.isChecked
  );

  if (doneTasks.length >= 2) {
    doneTasks.sort((a: DefaultStateI, b: DefaultStateI) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      return 0;
    });
  }

  const activeTasks = (tasks as DefaultStateI[]).filter(
    (task: DefaultStateI) => !task.isChecked
  );

  if (activeTasks.length >= 2) {
    activeTasks.sort((v1: DefaultStateI, v2: any) => {
      const a = v1.name.toLowerCase();
      const b = v2.name.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasksList = activeTasks.map(
    ({ name, id, isImportant, isChecked, date, finishDate }: DefaultStateI) => (
      <Task
        key={id}
        id={id}
        name={name}
        isImportant={isImportant}
        isChecked={isChecked}
        date={date}
        finishDate={finishDate}
      />
    )
  );

  const doneTasksList = doneTasks.map(
    ({ name, id, isImportant, isChecked, date, finishDate }: DefaultStateI) => (
      <DoneTask
        key={id}
        id={id}
        name={name}
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
      <div>{activeTasksList}</div>
      {(tasks as DefaultStateI[]).length ? (
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
