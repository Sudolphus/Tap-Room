import React from 'react';
import PropTypes from 'prop-types';
import DrinkListCard from './DrinkListCard';
import CardColumns from 'react-bootstrap/CardColumns';

function DrinkList(props) {
  const { drinkList } = props;
  return (
    <CardColumns>
      {drinkList.map(drink => 
        <DrinkListCard
          name={drink.name}
          price={drink.price}
          quantity={drink.quantity} />)}
    </CardColumns>
  )
}

DrinkList.propTypes = {
  drinkList: PropTypes.arrayOf(Object).isRequired
}

export default DrinkList;