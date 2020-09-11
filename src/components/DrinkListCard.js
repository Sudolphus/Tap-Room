import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './css/DrinkListCard.css';

function DrinkListCard(props) {
  const { onLinkClick, onChangingQuantity, drink } = props;
  let removeButton;
  let quantity;

  if (drink.quantity > 0) {
    removeButton = <Button variant='secondary' type='button' size='sm' block onClick={()=>onChangingQuantity(drink, -1)}>Remove a Pint</Button>
    if (drink.quantity < 10) {
      quantity = <Card.Text>Pints Remaining: {drink.quantity}<br /><span className="stock-warning">Almost Empty!</span></Card.Text>;
    } else {
      quantity = <Card.Text>Pints Remaining: {drink.quantity}<br /><br /></Card.Text>
    }
  } else if (drink.quantity === 0) {
    quantity = <Card.Text className="out-of-stock">Out of Stock<br /><br /></Card.Text>;
    removeButton = <Button variant='secondary' type='button' size='sm' block disabled>Remove a Pint</Button>;
  }

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title onClick={()=>onLinkClick('details', drink)}>{drink.name}</Card.Title>
        <Card.Subtitle>${drink.price}</Card.Subtitle>
        {quantity}
      </Card.Body>
      <Card.Footer>
        <Button variant='primary' type='button' size='sm' block onClick={()=>onChangingQuantity(drink, 1)}>Add a Pint</Button>
        <Button variant='success' type='button' size='sm' block onClick={()=>onChangingQuantity(drink, 124)}>Add a Keg</Button>
        {removeButton}
      </Card.Footer>
    </Card>
  )
}

DrinkListCard.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  onChangingQuantity: PropTypes.func.isRequired,
  drink: PropTypes.object.isRequired
}

export default DrinkListCard;