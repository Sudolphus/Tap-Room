import React from 'react';
import PropTypes from 'prop-types';
import DrinkForm from './DrinkForm';

function EditDrink(props) {
  const { onLinkClick, onEditDrink, drink } = props;

  function handleEditingDrink(event) {
    onEditDrink({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.content.value,
      quantity: drink.quantity,
      id: drink.id
    });
  }

  return (
    <DrinkForm
      onLinkClick={onLinkClick}
      onSubmittingForm={handleEditingDrink}
      buttonText="Edit Drink"
      defaultName={drink.name}
      defaultBrand={drink.brand}
      defaultPrice={drink.price}
      defaultContent={drink.alcoholContent} />
  )
}

EditDrink.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  onEditDrink: PropTypes.func.isRequired,
  drink: PropTypes.object.isRequired
}