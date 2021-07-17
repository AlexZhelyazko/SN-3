import React from 'react';
import heade_r from './header.module.css'
import Search from './Search/search'
import LoginContainer from './Login/LoginContainer';

const Header = () => {
    return (
        <header className = {heade_r.wrap}>
            <div className={heade_r.header}>
                <h2 className={heade_r.header_logo}>Roberto_Original</h2>
                <Search />
                <LoginContainer/>
            </div>
        </header>
    )
}

export default Header