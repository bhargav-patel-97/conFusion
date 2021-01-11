import React from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetailComponent from './DishdetailComponent';
import HeaderComponent from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }
      
  onDishSelect(dishID) {
    this.setState({ selectedDish: dishID });
}

  render() {
    return (
      <div>
        <HeaderComponent />
        <Menu 
            dishes={this.state.dishes} 
            onClick={(dishID) => this.onDishSelect(dishID)}  />
        <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish ) [0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;
