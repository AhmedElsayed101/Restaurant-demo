import React, { Component } from "react";
import Menu from "./DishesComponent";
import DishDetail from "./DishDetailComponent";

class MenuList extends Component {
    
    state = {
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
                    dishes={this.props.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)}
                ></Menu>
                {/* <DishDetail
                    dish={
                        this.props.dishes.filter(
                            (dish) => dish.id === this.state.selectedDish
                        )[0]
                    }
                ></DishDetail> */}
            </div>
        );
    }
}

export default MenuList;
