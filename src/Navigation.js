import React from 'react';
import './navbar.css';
import NavBrand from './NavBrand.js';
import NavLeft from './navItem';
const Navigation = () =>
{
    return(
        <div className="navbar">
        <NavBrand className = "nav-brand"/>
        <NavLeft className="navItems" childClass="nav-items-item"/>
        </div>
    );
}
export default Navigation;
