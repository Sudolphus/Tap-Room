import React from 'react';
import PropTypes from 'prop-types';
import v1 from 'uuid';
import DrinkForm from './DrinkForm';

function AddDrink(props) {
  const {onLinkClick, onAddingDrink} = props;

  function handleAddingDrink(event) {
    onAddingDrink({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.brand.value,
      content: event.target.brand.value,
      quantity: 124,
      id: v1()
    });
  }

  return (
    <DrinkForm
      onLinkClick={onLinkClick}
      onSubmittingForm={handleAddingDrink}
      buttonText='Add Drink' />
  );
}

AddDrink.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  onAddingDrink: PropTypes.func.isRequired
}

export default AddDrink;