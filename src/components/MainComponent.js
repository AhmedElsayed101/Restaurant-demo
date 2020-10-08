import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "./MenuListComponent";
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from "./HomeComponent";
import Contact from './ContactComponent'
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

class Main extends Component {

    state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS,
    }

    render() {

        
        return (
            <Fragment >
                <Header />
                <Switch>
                    <Route path="/home" component={() => <Home/>} />
                    <Route exact path="/menu" component={() => <Menu dishes = {this.state.dishes}/>} />
                    <Route exact path = "/contactus" component= {Contact} />
                    <Redirect to= "/home"/>
                </Switch>
                <Footer />
            </Fragment>
        )
    }
}

export default Main