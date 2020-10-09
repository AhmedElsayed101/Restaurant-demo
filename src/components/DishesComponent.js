import React, {Fragment} from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem
} from "reactstrap";

import { Link } from "react-router-dom";
 
import { Loading } from "./LoadingComponent";

function RenderMenuItem ({dish, onClick}){

    return(
        <Card onClick={() => onClick(dish.id)}>
            <Link to ={`/menu/${dish.id}`}>
                <CardImg
                    width="100%"
                    // object = {true}
                    src={dish.image}
                    alt={dish.name}
                ></CardImg>

                <CardImgOverlay  className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )

}

function Menu(props) {

    
    
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish = {dish} onClick = {props.onClick}></RenderMenuItem>
            </div>
        );
    });

    if(props.dishes.isLoading){
        return (
            <div className="row">
                <Loading/>
            </div>
        )
    }
    else if (props.dishes.errMess){
        return(
            <div className="row">
                <h4>{props.dishes.errMess}</h4>
            </div>
        )
    }

    else {
        return (

            <Fragment>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to = '/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to = '/menu'>Menu</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                    </div>
                </div>

                <div className="row">{menu}</div> 
            </Fragment>   
        )
    }
}

export default Menu;
