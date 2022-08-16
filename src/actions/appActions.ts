import { DefaultStateI } from '../interfaces';

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';
export const CHECKED = 'CHECKED';
export const ID = 'ID';
export const LOCAL_STORAGE = 'LOCAL_STORAGE';

export interface AddTaskI {
  type: typeof ADD;
  payload: DefaultStateI;
}

export interface EditTaskI {
  type: typeof EDIT;
  payload: DefaultStateI;
}

export interface DeleteTaskI {
  type: typeof DELETE;
  payload: string;
}

export interface CheckedTaskI {
  type: typeof CHECKED;
  payload: { id: string; finishDate: number };
}
export interface AddTasksFromLocalStorageI {
  type: typeof LOCAL_STORAGE;
  payload: DefaultStateI[];
}
export type AppReducerActionsTypes =
  | AddTaskI
  | EditTaskI
  | DeleteTaskI
  | CheckedTaskI
  | AddTasksFromLocalStorageI;

export const addTasksFromLocalStorage = (tasks: DefaultStateI[]) => ({
  type: LOCAL_STORAGE,
  payload: tasks,
});
export const addTask = ({ name, id, isImportant, date }: DefaultStateI) => ({
  type: ADD,
  payload: {
    name,
    id,
    isImportant,
    isChecked: false,
    date,
  },
});

export const deleteTask = (id: DefaultStateI) => ({
  type: DELETE,
  payload: id,
});

export const editTask = ({ id, name }: DefaultStateI) => ({
  type: EDIT,
  payload: {
    id,
    name,
  },
});

export const setTaskIsChecked = ({ id, finishDate }: DefaultStateI) => ({
  type: CHECKED,
  payload: { id, finishDate },
});
