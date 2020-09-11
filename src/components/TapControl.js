import React from 'react';
import DrinkList from './DrinkList';
import DrinkDetails from './DrinkDetails';

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

  render() {
    let pageToDisplay;
    if (this.state.currentPage === 'index') {
      pageToDisplay = <DrinkList
        onLinkClick={this.handleLinks}
        drinkList={this.state.drinkList} />
    } else if (this.state.currentPage === 'details') {
      pageToDisplay = <DrinkDetails
        drink = {this.state.currentDrink} />
    }
    return (
      <React.Fragment>
        {pageToDisplay}
      </React.Fragment>
    )
  }
}

export default TapControl;