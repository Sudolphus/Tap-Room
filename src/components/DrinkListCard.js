import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function DrinkListCard(props) {
  const { onLinkClick, onChangingQuantity, drink } = props;
  return (
    <Card className="text-center">
      <Card.Body onClick={()=>onLinkClick('details', drink)}>
        <Card.Title>{drink.name}</Card.Title>
        <Card.Subtitle>${drink.price}</Card.Subtitle>
        <Card.Text>Pints Remaining: {drink.quantity}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant='primary' type='button' size='sm' block onClick={()=>onChangingQuantity(drink, 1)}>Add a Pint</Button>
        <Button variant='success' type='button' size='sm' block onClick={()=>onChangingQuantity(drink, 124)}>Add a Keg</Button>
        <Button variant='secondary' type='button' size='sm' block onClick={()=>onChangingQuantity(drink, -1)}>Remove a Pint</Button>
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