import React, { useState } from 'react';

import Form from './Form';

// import { connect } from 'react-redux';
import { deleteRate } from './actions/appActions';
import { useDispatch } from 'react-redux';

const Element = ({
  author,
  comment,
  id,
  rate,
  //   deleteRate,
}) => {
  const [isVisibleForm, setIsVisibleForm] =
    useState(false);

  const toggleElements = () =>
    setIsVisibleForm(prev => !prev);

  const dispatch = useDispatch();

  const formOrButtonElement = isVisibleForm ? (
    <Form
      author={author}
      callback={toggleElements}
      comment={comment}
      id={id}
      rate={rate}
    />
  ) : (
    <button onClick={toggleElements}>
      Edytuj książkę
    </button>
  );
  const handleDelete = () => {
    dispatch(deleteRate({ id }));
  };

  return (
    <li>
      <p>Autor oceny: {author}</p>
      <p>Ocena: {rate}</p>
      <p>Komentarz: {comment}</p>
      {formOrButtonElement}
      <button onClick={handleDelete}>X</button>
    </li>
  );
};

// const connectActionsToProps = {
//   deleteRate,
// };

// const ElementConsumer = connect(
//   null,
//   connectActionsToProps
// )(Element);

// export default ElementConsumer;

export default Element;
