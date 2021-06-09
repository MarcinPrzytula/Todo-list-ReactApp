export const ADD = 'ADD_RATE';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

export const addRate = ({
  author,
  comment,
  rate,
}) => ({
  type: ADD,
  payload: {
    author: author,
    comment: comment,
    rate: rate,
    id: Math.floor(Math.random() * 1234),
  },
});

export const deleteRate = ({ id }) => ({
  type: DELETE,
  payload: {
    id,
  },
});

export const editRate = ({
  author,
  comment,
  rate,
  id,
}) => ({
  type: EDIT,
  payload: {
    author,
    comment,
    rate,
    id,
  },
});
