import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';

import styles from './style/App.module.css';
const App = () => {
  console.log('test');
  const validateInputValue = (val, items) => {
    let value = val
      .replace('>', '')
      .replace('<', '')
      .trim();

    if (value.length < 3) {
      alert(
        'The task must be at least 3 characters long.'
      );
      value = '';
    } else {
      const task = items.find(
        item =>
          item.name.toLowerCase().trim() ===
          value.toLowerCase()
      );
      if (task) {
        alert('This task is already here.');
        value = '';
      }
    }

    return value;
  };

  return (
    <Provider store={store}>
      <div className={styles.app}>
        <div className={styles.app_container}>
          <AddTask
            validateInput={validateInputValue}
          />
          <TaskList />
          <EditTask
            validateInput={validateInputValue}
          />
        </div>
      </div>
    </Provider>
  );
};

export default App;
