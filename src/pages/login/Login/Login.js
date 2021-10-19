import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} =useAuth();
    return (
        <div>
            <h2> Here login to me!</h2>
            <button onClick={signInUsingGoogle} className='btn btn-primary'>Google Sign In </button>
        </div>
    );
};

export default Login;