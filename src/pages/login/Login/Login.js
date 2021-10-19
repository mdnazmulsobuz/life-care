import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} =useAuth();
    const location = useLocation();
    const histroy = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            histroy.push(redirect_uri);
        })
    } 
    return (
        <div className='container login-container'>
            <h2 className='mb-3'> Here login to me!</h2>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                <>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <Button className='my-3 px-4' variant="primary" type="submit">Register</Button>
                </>
                    <h6>Or You can signin by Google!</h6>
                    <div>
                        <button onClick={handleGoogleLogin} className='btn btn-primary m2-3 px-3'>Google Sign In </button>
                    </div>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    );
};

export default Login;