import React from 'react';
import PropTypes from 'prop-types';
import DrinkListCard from './DrinkListCard';
import CardColumns from 'react-bootstrap/CardColumns';

function DrinkList(props) {
  const { onLinkClick, drinkList } = props;
  return (
    <CardColumns>
      {drinkList.map(drink => 
        <DrinkListCard
          onLinkClick={onLinkClick}
          drink={drink} />)}
    </CardColumns>
  )
}

DrinkList.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  drinkList: PropTypes.arrayOf(Object).isRequired
}

export default DrinkList;