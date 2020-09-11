import React from 'react';
import DrinkList from './DrinkList';
import DrinkDetails from './DrinkDetails';
import AddDrink from './AddDrink';

const sampleDrink1 = {
  name: 'drink1',
  brand: 'brand1',
  price: '4.00',
  alcoholContent: '5',
  quantity: 124
}

const sampleDrink2 = {
  name: 'drink2',
  brand: 'brand2',
  price: '5.00',
  alcoholContent: '5.5',
  quantity: 94
}

class TapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkList: [sampleDrink1, sampleDrink2],
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

  render() {
    let pageToDisplay;
    switch(this.state.currentPage) {
      case 'index':
        pageToDisplay = <DrinkList
        onLinkClick={this.handleLinks}
        drinkList={this.state.drinkList} /> 
        break;
      case 'details':
        pageToDisplay = <DrinkDetails
          onLinkClick = {this.handleLinks}
          drink = {this.state.currentDrink} />
        break;
      case 'create':
        pageToDisplay = <AddDrink
          onLinkClick = {this.handleLinks}
          onAddingDrink = {this.handleAddingDrink} />
        break;
      default:
        this.setState({ currentPage: 'index'});
    }

    // if (this.state.currentPage === 'index') {
    //   pageToDisplay = <DrinkList
    //     onLinkClick={this.handleLinks}
    //     drinkList={this.state.drinkList} />
    // } else if (this.state.currentPage === 'details') {
    //   pageToDisplay = <DrinkDetails
    //     drink = {this.state.currentDrink} />
    // } else if (this.state.currentPage === 'create')
    return (
      <React.Fragment>
        {pageToDisplay}
      </React.Fragment>
    )
  }
}

export default TapControl;