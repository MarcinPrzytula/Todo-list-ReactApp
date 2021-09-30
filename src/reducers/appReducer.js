import {
  ADD,
  EDIT,
  DELETE,
  CHECKED,
} from '../actions/appActions.js';

const edit = (state, action) => {
  return state.map(currentStateElement => {
    if (
      currentStateElement.id !== action.payload.id
    ) {
      return currentStateElement;
    }

    const { value } = action.payload;
    const { id, isImportant, isChecked, date } =
      currentStateElement;
    return {
      name: value,
      id,
      isImportant,
      isChecked,
      date,
    };
  });
};

export const appReducer = (
  state = [],
  action
) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case EDIT:
      return edit(state, action);
    case DELETE:
      return state.filter(
        currentStateElement =>
          currentStateElement.id !==
          action.payload.id
      );
    case CHECKED:
      return state.map(currentStateElement => {
        if (
          currentStateElement.id !==
          action.payload.id
        ) {
          return currentStateElement;
        }

        const {
          name,
          id,
          isImportant,
          isChecked,
          date,
        } = currentStateElement;

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
    default:
      console.warn(
        `Nie mamy akcji typu ${action.type}`
      );

      return state;
  }
};
