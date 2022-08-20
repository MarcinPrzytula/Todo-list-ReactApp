import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';

import styles from './style/App.module.css';
const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.app_container}>
        <React.StrictMode>
          <AddTask />
          <TaskList />
          <EditTask />
        </React.StrictMode>
      </div>
    </Provider>
  );
};

export default App;
