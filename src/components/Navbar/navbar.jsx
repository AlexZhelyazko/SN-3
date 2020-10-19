import React from 'react';
import navb from './nav.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={navb.nav}>
            <div><NavLink to="/profile" activeClassName = {navb.activeItem}>Profile</NavLink></div>
            <div><NavLink to="/messages" activeClassName = {navb.activeItem}>Messages</NavLink></div>
            <div><NavLink to="/news" activeClassName = {navb.activeItem}>News</NavLink></div>
            <div><NavLink to="/music" activeClassName = {navb.activeItem}>Music</NavLink></div>
            <div><NavLink to="/settings" activeClassName = {navb.activeItem}>Settings</NavLink></div>
        </nav>
    )
}

export default Navbar