import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

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
        <div>
            <h2> Here login to me!</h2>
            <button onClick={handleGoogleLogin} className='btn btn-primary'>Google Sign In </button>
        </div>
    );
};

export default Login;