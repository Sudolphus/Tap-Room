import React from 'react';
import PropTypes from 'prop-types';
import DrinkListCard from './DrinkListCard';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';

function DrinkList(props) {
  const { onLinkClick, drinkList } = props;
  return (
    <React.Fragment>
      <CardColumns>
        {drinkList.map(drink => 
          <DrinkListCard
            onLinkClick={onLinkClick}
            drink={drink} />)}
      </CardColumns>
      <Button variant='success' type='button' size='lg' block onClick={()=>onLinkClick('create')}>Add Drink</Button>
    </React.Fragment>
  )
}

DrinkList.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  drinkList: PropTypes.arrayOf(Object).isRequired
}

export default DrinkList;