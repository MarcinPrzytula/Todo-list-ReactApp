import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';
import './style/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isEditBoxVisible, setIsEditBoxVisible] =
    useState(false);
  const [taskId, setTaskId] = useState('');
  const [isImportantTask, setIsImportantTask] =
    useState(false);
  //   let currentId = '' - jebało sie w chuj jak bylo zamiast taskId;

  const getId = id => {
    setTaskId(id);
    setIsEditBoxVisible(true);
  };

  const editTask = value => {
    if (taskId === '')
      return alert(
        'najpierw wybierz zadanie do edycji!'
      );
    const currentTask = tasks.find(
      task => task.id === taskId
    );

    // currentTask?.name = actuallyValue; nie działa :(

    if (currentTask) {
      currentTask.name = value;
    }

    setTasks([...tasks]);
    setIsEditBoxVisible(false);
  };

  const deleteTask = id => {
    setTasks(
      tasks.filter(task => task.id !== id)
    );
  };
  const handleTaskChecked = id => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleNewTask = (name, isImportant) => {
    const task = {
      name,
      id: counter,
      isImportant,
      isChecked: false,
    };

    setTasks([...tasks, task]);
    setCounter(counter + 1);
  };

  const validateInputValue = (val, items) => {
    let value = val
      .replace('>', '')
      .replace('<', '')
      .trim();

    if (value.length < 3) {
      alert(
        'Zadanie musi składać się z minimum 3 znaków'
      );
      value = '';
    } else {
      const x = items.find(
        item =>
          item.name.toLowerCase().trim() ===
          value.toLowerCase()
      );
      if (x) {
        alert('To zadanie już jest');
        value = '';
      }
    }

    return value;
  };

  return (
    <>
      <AddTask
        handleNewTask={handleNewTask}
        tasks={tasks}
        isImportant={isImportantTask}
        setImportant={setIsImportantTask}
        validateInput={validateInputValue}
      />
      <TaskList
        deleteTask={deleteTask}
        getId={getId}
        tasks={tasks}
        setIsChecked={handleTaskChecked}
      />
      <EditTask
        isVisible={isEditBoxVisible}
        setIsVisible={setIsEditBoxVisible}
        editTask={editTask}
        tasks={tasks}
        validateInput={validateInputValue}
      />
    </>
  );
};

export default App;
