import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "./MenuListComponent";
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from "./HomeComponent";

class Main extends Component {

    render() {

        return (
            <Fragment >
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/menu" component={() => <Menu />} />
                    <Redirect to= "/home"/>
                </Switch>
                <Footer />
            </Fragment>
        )
    }
}

export default Main