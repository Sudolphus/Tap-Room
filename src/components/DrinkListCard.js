import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function DrinkListCard(props) {
  const { name, price, quantity } = props;
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>${price}</Card.Subtitle>
        <Card.Text>Pints Remaining: {quantity}</Card.Text>
      </Card.Body>
    </Card>
  )
}

DrinkListCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default DrinkListCard;