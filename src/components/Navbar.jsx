import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div className='container'>
            <div className='nav'>
                <h1>V</h1>
                <ul className='nav'>
                    <NavLink to='/product'><li>Home</li></NavLink>
                    <li>Services</li>
                    <li>Pages</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <NavLink to='/login'><h4>Login</h4></NavLink>
            </div>
        </div>
    )
}

export default Navbar