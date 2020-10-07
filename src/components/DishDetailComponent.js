import React, { Fragment } from "react";
import {
    Media,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg
                    width="100%"
                    // object
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

function RenderDishComments({ comments }) {

    return (

        <div className="col-12 col-md-5 m-1">
            <h2>Comments</h2>
            { comments.map((comment) => {
                const formatedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))
                return (
                    <Fragment key={comment.id}>
                        <div className="col-12">{comment.comment}</div>
                        <br />
                        <div className="col-12">
                            {`-- ${comment.author} , ${formatedDate}`}
                        </div>
                        <br />
                    </Fragment>
                );
            })
            }
        </div>
    )
}
function DishDetail(props) {

    const { dish } = props;
    console.log("dish", dish);
    if (dish != null) {
        return (

            <div className="row">

                <RenderDish dish={dish}></RenderDish>
                <RenderDishComments comments={dish.comments}></RenderDishComments>

            </div>
        );
    } else {
        return <div></div>;
    }

}

export default DishDetail;
