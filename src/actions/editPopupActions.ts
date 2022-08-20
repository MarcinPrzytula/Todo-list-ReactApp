import { DefaultStatePopupI } from '../interfaces';
export const ID = 'ID';
export const SWITCH_VISIBLE = 'SWITCH_VISIBLE';

export interface ID_I {
  type: typeof ID;
  payload: DefaultStatePopupI;
}

export interface SWITCH_VISIBLE_I {
  type: typeof SWITCH_VISIBLE;
}

export type EditPopupActionsTypes = ID_I | SWITCH_VISIBLE_I;

export interface EditPopupActionsI {
  id?: string;
  active: boolean;
}

export const currentId = ({ id, active }: EditPopupActionsI) => ({
  type: ID,
  payload: {
    id,
    active,
  },
});

export const switchVisible = ({ active }: EditPopupActionsI) => ({
  type: SWITCH_VISIBLE,
  payload: {
    active,
  },
});
