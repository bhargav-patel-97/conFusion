import React from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import HeaderComponent from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent'
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      comments: COMMENTS,
      leaders: LEADERS
    //   selectedDish: null
    }
  }
      
//   onDishSelect(dishID) {
//     this.setState({ selectedDish: dishID });
// }

  render() {

    const HomePage = () => {
        return(
            <Home 
              dish={this.state.dishes.filter((dish) => dish.featured) [0]}  
              promotion={this.state.promotions.filter((promo) => promo.featured) [0]}  
              leader={this.state.leaders.filter((leader) => leader.featured) [0]}  
            />
        );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      );
    }

    return (
      <div>
        <HeaderComponent />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={() => <About leaders={this.state.leaders} />} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
