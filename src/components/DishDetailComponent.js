import React, { Component, Fragment } from "react";
import {
    Media,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";

class DishDetail extends Component {

    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg
                        width="100%"
                        object
                        src={dish.image}
                        alt={dish.name}
                    ></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    renderDishComments(comments) {
        return (

            <div className="col-12 col-md-5 m-1">
                <h2>Comments</h2>
                { comments.map((comment) => {
                    return (
                        <Fragment key={comment.id}>
                            <div className="col-12">{comment.comment}</div>
                            <br />
                            <div className="col-12">
                                {`-- ${comment.author} , ${comment.date}`}
                            </div>
                            <br />
                        </Fragment>
                    );
                })
                }
            </div>
        )
    }

    render() {
        const { dish } = this.props;
        console.log("dish", dish);
        if (dish != null) {
            return (
                <Fragment>
                    <div className="row">

                        {this.renderDish(dish)}

                        {this.renderDishComments(dish.comments)}

                    </div>
                </Fragment>
            );
        } else {
            return <div></div>;
        }
    }
}

export default DishDetail;
