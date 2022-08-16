import {
  ADD,
  EDIT,
  DELETE,
  CHECKED,
  LOCAL_STORAGE,
  AppReducerActionsTypes,
  CheckedTaskI,
  EditTaskI,
} from '../actions/appActions';

import { DefaultStateI } from '../interfaces';

const editTask = (state: DefaultStateI[], action: EditTaskI) => {
  const newState = state.map((currentStateElement: DefaultStateI) => {
    if (currentStateElement.id !== action.payload.id) {
      window.localStorage.setItem(
        'tasks',
        JSON.stringify([...state, currentStateElement])
      );
      return currentStateElement;
    }

    const { name } = action.payload;
    const { id, isImportant, isChecked, date } = currentStateElement;

    return {
      name,
      id,
      isImportant,
      isChecked,
      date,
    };
  });
  window.localStorage.setItem('tasks', JSON.stringify(newState));
  return newState;
};

const deleteTask = (state: DefaultStateI[], action: AppReducerActionsTypes) => {
  console.log(action);
  const newState = state.filter(
    currentStateElement => currentStateElement.id !== action.payload
  );
  window.localStorage.setItem('tasks', JSON.stringify(newState));
  return newState;
};

const finishTask = (state: DefaultStateI[], action: CheckedTaskI) => {
  const newState = state.map(currentStateElement => {
    if (currentStateElement.id !== action.payload.id) {
      return currentStateElement;
    }

    const { name, id, isImportant, isChecked, date } = currentStateElement;

    const { finishDate } = action.payload;

    return {
      name,
      id,
      isImportant,
      isChecked: !isChecked,
      date,
      finishDate,
    };
  });
  window.localStorage.setItem('tasks', JSON.stringify(newState));
  return newState;
};

const appReducer = (
  state: DefaultStateI[] = [],
  action: AppReducerActionsTypes
) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case EDIT:
      return editTask(state, action);
    case DELETE:
      return deleteTask(state, action);
    case CHECKED:
      return finishTask(state, action);
    case LOCAL_STORAGE:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default appReducer;
