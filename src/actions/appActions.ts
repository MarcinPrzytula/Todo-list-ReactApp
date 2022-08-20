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
  payload: { id: string; name: string };
}

export interface DeleteTaskI {
  type: typeof DELETE;
  payload: string;
}

export interface CheckedTaskI {
  type: typeof CHECKED;
  payload: { id: string; finishDate: string };
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
export const addTask = ({ id, name, isImportant, date }: DefaultStateI) => ({
  type: ADD,
  payload: {
    id,
    name,
    isImportant,
    isChecked: false,
    date,
    finishDate: null,
  },
});

export const deleteTask = (id: string) => ({
  type: DELETE,
  payload: id,
});

export const editTask = ({ id, name }: EditTaskI['payload']) => ({
  type: EDIT,
  payload: {
    id,
    name,
  },
});

export const setTaskIsChecked = ({
  id,
  finishDate,
}: CheckedTaskI['payload']) => ({
  type: CHECKED,
  payload: { id, finishDate },
});
