import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [error, setError]= useState('');
    const [isLogin, setIsLogin] = useState(false);
    const {signInUsingGoogle} =useAuth();
    const location = useLocation();
    const histroy = useHistory();

    // Redirect to existong or homepage
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            histroy.push(redirect_uri);
        })
    };
    
    // toogle login and register 
    const toggleLogin = tg =>{
        setIsLogin(tg.target.checked)
    }
    
    const handleNameChange = nm =>{
        setName(nm.target.value)
    }

    const handleEmailChange = em =>{
        setEmail(em.target.value);
    };

    const handlePasswordChange = ps =>{
        setPassword(ps.target.value);
    }
    const auth = getAuth();

    //  handle error with password value. 
    const handleRegistration= (re) =>{
        re.preventDefault();
        
        if(password.length < 6){
            setError('Password Must be at least 6 characters long.')
            return;
        }
        
        if(isLogin){
            processLogin(email, password);
        }
        else{
            registerNewUser(email, password);
        }
    };
    
    // handle login process and error null
    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            histroy.push(redirect_uri);
            setError('')
        })  
        .catch(error =>{
            setError(error.message);
        })
    }

    //  Display user name 
    const setUserName = () =>{
        updateProfile(auth.currentUser, {displayName: name})
        .then(result =>{})
    }

    // Register for new user
    const registerNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            histroy.push(redirect_uri);
            setError('');
            setUserName();
        })  
        .catch(error =>{
            setError(error.message);
        })
    }

    return (
        <div className='container login-container'>
            <h2 className='mb-3'> Please {isLogin ?'Login' : "Register"}!</h2>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <Form onSubmit={handleRegistration} >
                        {/* dynamic handle */}
                   {!isLogin && <FloatingLabel
                        controlId="floatingInput"
                        label="Your Name"
                        className="mb-3">
                        <Form.Control   onBlur = {handleNameChange} placeholder="Your Name" required/>
                    </FloatingLabel>}
                   <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3">
                        <Form.Control onBlur = {handleEmailChange} type="email" placeholder="name@example.com" required/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control onBlur = {handlePasswordChange} type="password" placeholder="Password" required/>
                    </FloatingLabel>
                    {/* login register buuton */}
                    <Form.Check onChange={toggleLogin} className='text-start py-3' type="checkbox" label=" Alreday Registered?" />
                    <div className='text-danger'>{error}</div>
                    <Button className='my-3 px-4' variant="primary" type="register">{isLogin ?'Login' : "Register"}</Button>
                    </Form>
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