import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCampsite({campsite}) {

}
const required = val => val && val.length;
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);



class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            email: '',
            review: '',
            touched: {
                firstName: false,
               email: false,
               review: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
}

validate(firstName, email, review,); {

    const errors = {
        firstName: '',
        email: '',
        review:'',
    };

    if (this.state.touched.firstName) {
        if (firstName.length < 2) {
            errors.firstName = 'First name must be at least 2 characters.';
        } else if (firstName.length > 15) {
            errors.firstName = 'First name must be 15 or less characters.';
        }
    }
    if (this.state.touched.email && !email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
}
    if (this.state.touched.review) {
        if (review.length < 2) {
            errors.review = 'review must be at least 10 characters.';
       
        }
    }
handleBlur = (field) => () => {
    this.setState({
        touched: {...this.state.touched, [field]: true}
    });
}

    handleInputChange(event); {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }
    handleSubmit(values); {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    handleSubmit(event); {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(); {

        const errors = this.validate(this.state.firstName,this.state.email, this.state.review );
    
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                </div>

                <div className="row row-content align-items-center">
                    <div className="col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                            1 Nucamp Way<br />
                            Seattle, WA 98001<br />
                            U.S.A.
                        </address>
                    </div>
                    <div className="col">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                    </div>
                </div>
            
                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstName" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                <Control.text model=".firstName" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                             <Row className="form-group">
                                <Label htmlFor="review" md={2}>Review</Label>
                                <Col md={10}>
                                    <Control.text model=".review" id="review" name="review"
                                        placeholder="Review"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(250),
                                            isReview
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".review"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 10 characters',
                                            maxLength: 'Must be 250 characters or less',
                                            isReview: 'Must be a character'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}
                                    />
                                </Col>
                            </Row>
                        </LocalForm>
            </div>
        );
    }
  




function RenderComments({comments}) {


function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.campsite.comments} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
};
}

export default CampsiteInfo;