import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';

import './style/App.css';

const App = () => {
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
      const task = items.find(
        item =>
          item.name.toLowerCase().trim() ===
          value.toLowerCase()
      );
      if (task) {
        alert('To zadanie już jest');
        value = '';
      }
    }

    return value;
  };

  return (
    <Provider store={store}>
      <div>
        <AddTask
          validateInput={validateInputValue}
        />
        <TaskList />
        <EditTask
          validateInput={validateInputValue}
        />
      </div>
    </Provider>
  );
};

export default App;
