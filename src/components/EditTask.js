import React, { useState } from 'react';
import styles from '../style/EditTask.module.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { editTask } from '../actions/appActions';
import { currentId } from '../actions/editPopupActions';

const EditTask = ({ validateInput }) => {
  const tasks = useSelector(store => store.tasks);

  const editPopup = useSelector(store => store.editPopup);

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.currentTarget.value);
  };

  const handleEditTask = e => {
    e.preventDefault();

    const value = validateInput(inputValue, tasks);

    if (value) {
      dispatch(editTask({ id: editPopup.id, name: value }));

      dispatch(currentId({ id: null, active: false }));
      setInputValue('');
    }
  };

  const handleClick = () => {
    dispatch(currentId({ id: null, active: false }));
  };
  return (
    <>
      <div
        className={`${styles.blurWrapper} ${
          editPopup.active ? styles.show : null
        }`}
      >
        <div className={styles.formWrapper}>
          <form onSubmit={handleEditTask} name="send">
            <div className={styles.menuWrapper}>
              <input
                onChange={handleChange}
                value={inputValue}
                type="text"
                placeholder="Enter a new name for the task."
              />
              <button className={styles.saveButton}>
                <span className="far fa-save"></span>
              </button>
            </div>
          </form>
          <button className={styles.quit} onClick={handleClick}>
            <i className="far fa-times-circle"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default EditTask;
