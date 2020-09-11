import React from 'react';
import DrinkList from './DrinkList';

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
      currentPage: 'index'
    }
  }

  render() {
    let pageToDisplay;
    if (this.state.currentPage === 'index') {
      pageToDisplay = <DrinkList
      drinkList={this.state.drinkList} />
    }
    return (
      <React.Fragment>
        {pageToDisplay}
      </React.Fragment>
    )
  }
}

export default TapControl;