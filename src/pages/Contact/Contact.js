import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div>
                <h2 className='title'>Contact Us</h2>
            </div>
            {/* address area */}
            <div className='container row py-5'>
                <div className='col-md-6 py-3'>
                    <h2 className='text-success'><ins>Address:</ins></h2>
                    <p>Life-Care Tower</p>
                    <p>87/B, Sher-e-Bangla Road.</p>
                    <p>Dhamondi, Dhaka-1200.</p>
                    <h6>Tel: +8801711709220</h6>
                    <h6>Email: <ins>sobuz287@gmail.com</ins></h6>
                </div>
                {/* contact from area */}
                <div className='col-md-6 py-3'>
                    <h5 >Feel Free Ask any Query & Suggestion!</h5>
                    <Form>
                        <Row className="my-3">
                            <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Control placeholder="First Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Control placeholder="Last Name" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPhoneNumber">
                                <Form.Control placeholder="Phone Number" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGridAddress1">  
                            <Form.Control as="textarea" placeholder="Leave a comment here"style={{ height: '100px' }}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className='px-4'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;