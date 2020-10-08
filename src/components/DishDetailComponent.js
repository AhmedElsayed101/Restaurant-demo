import React, { Fragment } from "react";
import {
    Media,
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

    const { dish, comments } = props;
    console.log("dish", dish);
    if (dish != null) {
        return (

            <div className="row">

                <Breadcrumb>
                    <BreadcrumbItem><Link to = '/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to = '/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active >{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                   <h3>{props.dish.name}</h3>
                </div>
            
                <RenderDish dish={dish}></RenderDish>
                <RenderDishComments comments={comments}></RenderDishComments>

            </div>
        );
    } else {
        return <div></div>;
    }

}

export default DishDetail;
