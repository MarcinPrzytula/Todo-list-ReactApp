import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
  addRate,
  editRate,
} from './actions/appActions';

const Form = ({
  //   addRate,
  author = '',
  comment = '',
  callback,
  //   editRate,
  id,
  rate = 0,
}) => {
  const [authorInput, setAuthorInput] =
    useState(author);
  const [rateInput, setRateInput] =
    useState(rate);
  const [commentInput, setCommentInput] =
    useState(comment);

  const dispatch = useDispatch();

  const handleChangeAuthor = e =>
    setAuthorInput(e.target.value);

  const handleChangeRate = e =>
    setRateInput(e.target.value);

  const handleChangeComment = e =>
    setCommentInput(e.target.value);

  const handleOnSubmit = e => {
    e.preventDefault();

    const rateObject = {
      author: authorInput,
      comment: commentInput,
      id,
      rate: Number(rateInput),
    };

    // id
    //   ? editRate(rateObject)
    //   : addRate(rateObject);
    id
      ? dispatch(editRate(rateObject))
      : dispatch(addRate(rateObject));

    if (id) {
      callback();
    }

    setAuthorInput('');
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>
            Author:
            <input
              onChange={handleChangeAuthor}
              value={authorInput}
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Ocena:
            <input
              onChange={handleChangeRate}
              value={rateInput}
              type="number"
            />
          </label>
        </div>
        <div>
          <label>
            Komentarz:
            <input
              onChange={handleChangeComment}
              value={commentInput}
              type="text"
            />
          </label>
        </div>
        <button type="submit">
          {id ? 'Edycja oceny' : 'Dodaj ocenę'}
        </button>
      </form>
    </>
  );
};

// const connectActionsToProps = {
//   addRate,
//   editRate,
// };

// const FormConsumer = connect(
//   null,
//   connectActionsToProps
// )(Form);

// export default FormConsumer;
export default Form;
