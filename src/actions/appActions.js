export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';
export const CHECKED = 'CHECKED';
export const ID = 'ID';

export const addTask = ({
  name,
  id,
  isImportant,
  date,
}) => ({
  type: ADD,
  payload: {
    name,
    id,
    isImportant,
    isChecked: false,
    date,
  },
});

export const deleteTask = ({ id }) => ({
  type: DELETE,
  payload: {
    id,
  },
});

export const editTask = ({ id, value }) => ({
  type: EDIT,
  payload: {
    id,
    value,
  },
});

export const setTaskIsChecked = ({
  id,
  finishDate,
}) => ({
  type: CHECKED,
  payload: { id, finishDate },
});
