import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <div className= 'py-5 container px-5'>
           <h2>Get Latest Update</h2> 
           <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" required/>
             </FloatingLabel>
           <br />
            <div className="d-flex justify-content-center "><button className="btn btn-primary  button font-color">Subscribe</button></div>
        </div>
    );
};

export default Subscribe;