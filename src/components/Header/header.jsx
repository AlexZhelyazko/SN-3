import React from 'react';
import heade_r from './header.module.css'
import Search from './Search/search'
import Buttons from './RegisterButtons/buttons'
import LoginContainer from './Login/LoginContainer';

const Header = () => {
    return (
        <header className = {heade_r.wrap}>
            <div className={heade_r.header}>
                <h2 className={heade_r.header_logo}>SN-3</h2>
                <Search />
                <LoginContainer/>
                <Buttons />
            </div>
        </header>
    )
}

export default Header