import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "./MenuListComponent";
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from "./HomeComponent";
import Contact from './ContactComponent'
import AboutUs from "./AboutUsComponent";
import DishDetail from "./DishDetailComponent";
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

        const {dishes, comments, promotions, leaders} = this.state
        const HomePage = () => {
            
            return (
                <Home
                    dish= {dishes.filter((dish) => (dish.featured))[0]}
                    leader= {leaders.filter((leader) => (leader.featured))[0]}
                    promotion= {promotions.filter((promotion) => (promotion.featured))[0]}
                />
            )
        }
        
        const DishWithId = ({match}) => {
            return(
                <div className="container">
                    <div className="row">
                        <DishDetail
                            dish = {this.state.dishes.filter((dish) => (dish.id === parseInt(match.params.dishId,10)))[0]}
                            comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                            />
                    </div>
                </div>
            )
        }

        return (
            <Fragment >
                <Header />
                <Switch>
                    <Route path="/home" component={() => <HomePage/>} />
                    <Route exact path="/menu" component={() => <Menu dishes = {this.state.dishes}/>} />
                    <Route path="/menu/:dishId" component = {DishWithId}/>
                    <Route exact path = "/contactus" component= {Contact} />
                    <Route exact path = "/aboutus" component = {() => <AboutUs leaders = {this.state.leaders}/>}/>
                    <Redirect to= "/home"/>
                </Switch>
                <Footer />
            </Fragment>
        )
    }
}

export default Main