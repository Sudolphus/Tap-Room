import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function DrinkListCard(props) {
  const { onLinkClick, drink } = props;
  return (
    <Card className="text-center">
      <Card.Body onClick={()=>onLinkClick('details', drink)}>
        <Card.Title>{drink.name}</Card.Title>
        <Card.Subtitle>${drink.price}</Card.Subtitle>
        <Card.Text>Pints Remaining: {drink.quantity}</Card.Text>
      </Card.Body>
    </Card>
  )
}

DrinkListCard.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  drink: PropTypes.object.isRequired
}

export default DrinkListCard;