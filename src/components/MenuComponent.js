import React, {Component} from 'react'
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import DishDetail from './DishDetailComponent'

class Menu extends Component {

    state = {

        selectedDish: null
    }

    onDishSelect (dish) {
        this.setState(() => ({
            selectedDish : dish
        }))
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key= {dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick= {() => this.onDishSelect(dish)}>
                        
                        <CardImg width="100%" object src={dish.image} alt= {dish.name}></CardImg>
                        
                        <CardImgOverlay body className="ml-5">
                            <CardTitle >{dish.name}</CardTitle>
                            {/* <p>{dish.description}</p> */}
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return (

            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <DishDetail dish={this.state.selectedDish}></DishDetail>
                </div>
            </div>  
        )
    }
}

export default Menu