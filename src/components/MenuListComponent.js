import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import Menu from "./MenuComponent";
class MenuList extends Component {

    state = {
        dishes : DISHES
    }

    render () {
        return (
            <Menu dishes = {this.state.dishes}></Menu>
        )
    }
}

export default MenuList