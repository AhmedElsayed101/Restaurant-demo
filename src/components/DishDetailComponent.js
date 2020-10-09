import React, { Fragment, Component } from "react";
import {
    Modal,
    ModalBody,
    ModalHeader,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormGroup,
    Button,
    Col,
    Label,
    Input,
    FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { Loading } from "./LoadingComponent";

import { baseUrl } from "../shared/baseURL";


function RenderButton({handleToggleModal}) {
    return (
        <Form onSubmit = {handleToggleModal}>
            <FormGroup row>
                <Col md={{ size: 6}}>
                    <Button type="submit" color="secondary" >
                        <i className='fa fa-pencil fa-lg'></i> Submit comment
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    )
}

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg
                    width="100%"
                    // object
                    src={baseUrl + dish.image}
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

function RenderDishComments({ comments, handleToggleModal, addComment}) {

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
            <RenderButton
                handleToggleModal = {handleToggleModal}
                addComment = {addComment}
            />
        </div>
    )
}
class DishDetail extends Component {

    state = {
        isModalOpen : false,
        rating : 1,
        yourname: '',
        comment : '',
        touched : {
            rating : false,
            yourname: false,
            comment : false,
        }
    }

    handleToggleModal = (e) => {
        e.preventDefault()
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }

    handleInputChange = (event) => {
        const { target } = event;
        const { name, value} = target;
        this.setState(() => ({
            [name]: value,
        }));
    };

    handleFormSubmit = (event) => {
        event.preventDefault()
        const {rating, yourname, comment} = this.state
        const author = yourname
        // console.log('props', this.props)
        // alert(`Rating : ${rating},   Name : ${yourname},  Comment : ${comment}`)
        this.props.addComment(this.props.dish.id, rating, author, comment)
        this.setState({
            rating : 1,
            yourname: '',
            comment : '',
        })
        this.handleToggleModal(event)
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    };

    validate = (rating, yourname, comment) => {

        const errors = {
            rating: "",
            yourname: "",
            comment: "",
        };

        if (this.state.touched.yourname && yourname.length < 3)
            errors.yourname = 'Must be greater than 2 characters';
        else if (this.state.touched.yourname && yourname.length > 15)
            errors.yourname = 'Must be 15 characters or less';

        return errors;
    };

    render (){

        const {rating, yourname, comment} = this.state
        const { dish, comments, isLoading, errMess } = this.props;
        const errors = this.validate(rating, yourname, comment)

        if(isLoading){
            return(
                <div className="row">
                    <Loading/>
                </div>
            )
        }
        else if (errMess){
            return(
                <div className="row">
                    <h4>{errMess}</h4>
                </div>
            )
        }
        
        if (dish != null) {
            return (

                <div className="row">

                    <Modal isOpen = {this.state.isModalOpen} toggle = {this.handleToggleModal}>
                        <ModalHeader>
                            Submit Comment
                        </ModalHeader>
                        <ModalBody>
                            <Form onSubmit= {this.handleFormSubmit}>
                            <FormGroup row>
                                <Col md='12'>
                                    <Label>Rating</Label>
                                </Col>
                                <Col md={{ size: 12, }}>
                                    <Input
                                        type="select"
                                        name="rating"
                                        value={this.state.rating}
                                        onChange={this.handleInputChange}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="yourname" md="12">
                                    Your Name{" "}
                                </Label>
                                <Col md="12">
                                    <Input
                                        type="text"
                                        id="yourname"
                                        name="yourname"
                                        placeholder="Your Name"
                                        valid = {errors.yourname === '' && this.state.touched.yourname == true}
                                        invalid = {errors.yourname !== ''}
                                        value={this.state.yourname}
                                        onBlur = {this.handleBlur('yourname')}
                                        onChange={this.handleInputChange}
                                    ></Input>
                                    <FormFeedback>{errors.yourname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor= 'comment' md='12'>Comment</Label>
                                <Col md = '12'>
                                    <Input
                                        type = "textarea"
                                        id = "comment"
                                        name = "comment"
                                        rows = "6"
                                        value= {this.state.comment}
                                        onChange = {this.handleInputChange}
                                    ></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6}}>
                                    <Button type="submit" color="primary" onClick = {this.handleBlur}>
                                        <i className='fa fa-pencil fa-lg'></i> Submit 
                                    </Button>
                                </Col>
                            </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>

                    <Breadcrumb>
                        <BreadcrumbItem><Link to = '/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to = '/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active >{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    <h3>{this.props.dish.name}</h3>
                    </div>
                
                    <RenderDish dish={dish}></RenderDish>
                    <RenderDishComments 
                        comments={comments}
                        handleToggleModal ={this.handleToggleModal}
                        addComment = {this.props.addComment}
                    ></RenderDishComments>
                </div>
            );
        } else {
            return <div></div>;
        }

    }

}

export default DishDetail;
