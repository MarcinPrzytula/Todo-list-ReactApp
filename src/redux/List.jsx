import React from 'react';

// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

import Element from './Element';

// const List = ({ ratesInProps }) => {
//   const ratesElements = ratesInProps.map(rate => (
//     <Element key={rate.id} {...rate} />
//   ));

const List = () => {
  const rates = useSelector(store => store.rates);
  const ratesElements = rates.map(rate => (
    <Element key={rate.id} {...rate} />
  ));

  return <ul>{ratesElements}</ul>;
};

// const connectReduxStateToProps = store => ({
//   ratesInProps: store.rates,
// });
// const ListConsumer = connect(
//   connectReduxStateToProps
// )(List);

// export default ListConsumer;

export default List;
