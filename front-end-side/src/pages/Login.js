import React from 'react'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Login = () => {
    let {loginUser} = useContext(AuthContext)
    return (
    <div>
        <form onSubmit={loginUser}>
            <input type='text' name='username' placeholder='Enter username'/>
            <input type='text' name='password' placeholder='Enter password'/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default Login;