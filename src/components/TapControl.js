import React from 'react';
import DrinkList from './DrinkList';
import DrinkDetails from './DrinkDetails';
import AddDrink from './AddDrink';
import EditDrink from './EditDrink';
import ErrorPage from './ErrorPage';
import Navigator from './Navigator';

class TapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkList: [],
      currentPage: 'index',
      currentDrink: null
    }
  }

  handleLinks = (page, drink = null) => {
    this.setState({
      currentPage: page,
      currentDrink: drink
    });
  }

  handleAddingDrink = (newDrink) => {
    const newDrinkList = this.state.drinkList.concat(newDrink);
    this.setState({ drinkList: newDrinkList });
    this.handleLinks('index');
  }

  handleEditDrink = (editDrink) => {
    const newDrinkList = this.state.drinkList.map(drink => {
      if (drink.id === editDrink.id) {
        return editDrink;
      } else {
        return drink;
      }
    });
    this.setState({drinkList: newDrinkList});
    this.handleLinks('index');
  }

  handleDeleteDrink = (deleteDrink) => {
    const newDrinkList = this.state.drinkList.filter(drink => drink.id !== deleteDrink.id);
    this.setState({drinkList: newDrinkList});
    this.handleLinks('index');
  }

  handleChangeDrinksRemaining = (drink, amount) => {
    const newDrink = {
      name: drink.name,
      brand: drink.brand,
      price: drink.price,
      alcoholContent: drink.alcoholContent,
      quantity: Math.max(drink.quantity + amount, 0),
      id: drink.id
    }
    this.handleEditDrink(newDrink);
  }

  render() {
    let pageToDisplay;
    switch(this.state.currentPage) {
      case 'index':
        pageToDisplay = <DrinkList
        onLinkClick={this.handleLinks}
        onChangingQuantity = {this.handleChangeDrinksRemaining}
        drinkList={this.state.drinkList} /> 
        break;
      case 'details':
        pageToDisplay = <DrinkDetails
          onLinkClick = {this.handleLinks}
          onDelete = {this.handleDeleteDrink}
          drink = {this.state.currentDrink} />
        break;
      case 'create':
        pageToDisplay = <AddDrink
          onLinkClick = {this.handleLinks}
          onAddingDrink = {this.handleAddingDrink} />
        break;
      case 'edit':
        pageToDisplay = <EditDrink
          onLinkClick = {this.handleLinks}
          onEditDrink = {this.handleEditDrink}
          drink = {this.state.currentDrink} />
        break;
      default:
        pageToDisplay = <ErrorPage
          onLinkClick = {this.handleLinks} />;
    }

    return (
      <React.Fragment>
        <Navigator
          onLinkClick = {this.handleLinks} />
        {pageToDisplay}
      </React.Fragment>
    )
  }
}

export default TapControl;