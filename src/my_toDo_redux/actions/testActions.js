export const ID = 'ID';
export const SWITCH_VISIBLE = 'SWITCH_VISIBLE';

export const currentId = ({ id, value }) => ({
  type: ID,
  payload: {
    id,
    value,
  },
});

export const switchVisible = ({ value }) => ({
  type: SWITCH_VISIBLE,
  payload: {
    value,
  },
});
