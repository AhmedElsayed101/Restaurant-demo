import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect , withRouter} from "react-router-dom";
import { connect } from "react-redux";
import Menu from "./MenuListComponent";
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from "./HomeComponent";
import Contact from './ContactComponent'
import AboutUs from "./AboutUsComponent";
import DishDetail from "./DishDetailComponent";

import { addComment, fetchComments, fetchDishes, fetchPromos,} from "../redux/actions/ActionCreators";

class Main extends Component {


    componentDidMount () {
        const {fetchDishes, fetchComments, fetchPromos} = this.props
        fetchDishes()
        fetchComments()
        fetchPromos()
    }
   
    render() {

        const {dishes, comments, promotions, leaders} = this.props
        console.log('leaders', leaders)
        const HomePage = () => {
            return (
                <Home
                    dish= {dishes.dishes.filter((dish) => (dish.featured))[0]}
                    dishesLoading = {dishes.isLoading}
                    dishesErrMess = {dishes.errMess}
                    leader= {leaders.filter((leader) => (leader.featured))[0]}
                    promotion= {promotions.promotions.filter((promotion) => (promotion.featured))[0]}
                    promosLoading = {promotions.isLoading}
                    promosErrMess = {promotions.errMess}
                />
            )
        }
        
        const DishWithId = ({match}) => {
            return(
                <div className="container">
                    <div className="row">
                        <DishDetail
                            dish = {dishes.dishes.filter((dish) => (dish.id === parseInt(match.params.dishId,10)))[0]}
                            isLoading = {dishes.isLoading}
                            errMess = {dishes.errMess}
                            comments = {comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                            commentsErrMess = {comments.errMess}
                            addComment = {this.props.addComment}
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
                    <Route exact path="/menu" component={() => <Menu dishes = {dishes}/>} />
                    <Route path="/menu/:dishId" component = {DishWithId}/>
                    <Route exact path = "/contactus" component= {Contact} />
                    <Route exact path = "/aboutus" component = {() => <AboutUs leaders = {leaders}/>}/>
                    <Redirect to= "/home"/>
                </Switch>
                <Footer />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return (
        {
            dishes : state.dishes,
            comments : state.comments,
            promotions : state.promotions,
            leaders : state.leaders
        }
    )
}

const mapDispatchToProps = (dispatch) => ({
    addComment : (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes : () => {dispatch(fetchDishes())},
    fetchComments : () => {dispatch(fetchComments())},
    fetchPromos : () => {dispatch(fetchPromos())},

})

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))