import React from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div>
            <Link to=''>Home</Link>
            <Link to='/login'>Login</Link>
            {user ? (
                <button onClick={logoutUser}> Logout</button>
            ) : <Link to='/login'/>}
            {user && <p> Hi! {user.name} </p> }
            
        </div>
    )
}

export default Header;