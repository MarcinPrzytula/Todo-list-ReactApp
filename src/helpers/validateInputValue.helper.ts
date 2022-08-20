import { DefaultStateI } from '../interfaces';

export const validateInputValue = (val: string, items: DefaultStateI[]) => {
  let value = val.replace('>', '').replace('<', '').trim();

  if (value.length < 3) {
    alert('The task must be at least 3 characters long.');
    value = '';
  } else {
    const task = items.find(
      (item: any) => item.name.toLowerCase().trim() === value.toLowerCase()
    );
    if (task) {
      alert('This task is already here.');
      value = '';
    }
  }
  return value;
};
