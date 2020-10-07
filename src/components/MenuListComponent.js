import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import Menu from "./DishesComponent";
import DishDetail from "./DishDetailComponent";

class MenuList extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
    };

    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId,
        });
    }

    render() {
        return (
            <div className="container">
                <Menu
                    dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)}
                ></Menu>
                <DishDetail
                    dish={
                        this.state.dishes.filter(
                            (dish) => dish.id === this.state.selectedDish
                        )[0]
                    }
                ></DishDetail>
            </div>
        );
    }
}

export default MenuList;
