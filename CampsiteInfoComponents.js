import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Error } from 'react-redux-form';
​
const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
​
​
class CommentForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isModalOpen: false,
        rating: '',
        author: '',
        text: '',
        touched: {
            rating: false,
            author: false,
            text: false,
        }
      };
​
      this.toggleModal = this.toggleModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
    }
  
  
    toggleModal() {
      this.setState({ isModalOpen: !this.state.isModalOpen });
    }
  
    handleSubmit(values) {
      alert("Current state is: " + JSON.stringify(values));
  }
  
    render() {
      return (
        <React.Fragment>
        <Button outline onClick ={this.toggleModal}>
            <i className="fa fa-pencil fa-lg"/> Submit Comment
        </Button>
  
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                    <div className="form-group">
                        <Label htmlFor ="rating">Rating</Label>
​
                        <Control.select model=".rating" className="form-control" id="rating" name="rating" 
                        innerRef={input => this.rating = input}>
​
                            <option value="null">Choose one</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
​
                        </Control.select>
                    </div>
​
                    <div className="form-group">
                        <Label htmlFor="author">Your Name</Label>
                        <Control.text
                            model=".author"
                            className="form-control"
                            id="author"
                            name="author"
                            placeholder="Your Name"
                            innerRef={input => this.author = input}
                            Validator={{
                                required,
                                minLength: minLength(2),
                                maxLength: maxLength(15),
                            }}
                        />
​
                        <Error
                            className="text-danger"
                            model=".author"
                            show="touched"
                            component="div"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be at least 2 Characters',
                                maxLength: 'Must be 15 Characters or less'
                            }}
​
                        />
                    </div>
​
                    <div>
                        <Label htmlFor="textarea">Comment</Label>
                        <Control.textarea
                            model=".text"
                            className="form-control"
                            id="text"
                            name="text"
                            rows="6"
                            innerRef={input => this.text = input}
                        />
                    </div>
​
                    <Button type="submit" value ="submit" color="primary">Submit</Button>
                </LocalForm>
            </ModalBody>
          </Modal>
        </React.Fragment>
      );
    }
  }
​
function RenderCampsite({campsite}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
​
function RenderComments({comments}) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {
                    comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <p>
                                    {comment.text}<br />
                                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                </p>
                            </div>
                        );
                    })
                }
                <CommentForm/>
            </div>
            
        );
    }
    return <div />;
}
​
function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}
​
export default CampsiteInfo;