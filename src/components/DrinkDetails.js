import React from 'react';
import PropTypes from 'prop-types';

function DrinkDetails(props) {
  const { name, brand, price, alcoholContent, quantity } = props.drink;
  return (
    <React.Fragment>
      <h3>{name} --- ${price}</h3>
      <h5>{brand}</h5>
      <h5><i>{alcoholContent}% alcohol content</i></h5>
      <p><i>{quantity} remaining</i></p>
    </React.Fragment>
  )
}

DrinkDetails.propTypes = {
  drink: PropTypes.object.isRequired
}

export default DrinkDetails;