import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function DrinkDetails(props) {
  const { onLinkClick, onDelete, drink } = props;
  const { name, brand, price, alcoholContent, quantity } = drink;
  return (
    <React.Fragment>
      <h3>{name} --- ${price}</h3>
      <h5>{brand}</h5>
      <h5><i>{alcoholContent}% alcohol content</i></h5>
      <p><i>{quantity} remaining</i></p>
      <Button variant='secondary' type='button' size='lg' block onClick={()=>onLinkClick('index')}>Back To Index</Button>
      <Button variant='warning' type='button' size='lg' block onClick={()=>onLinkClick('edit', drink)}>Edit Drink</Button>
      <Button variant='danger' type='button' size='lg' block onClick={()=>onDelete(drink)}>Delete Drink</Button>
    </React.Fragment>
  )
}

DrinkDetails.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  drink: PropTypes.object.isRequired
}

export default DrinkDetails;