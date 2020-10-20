import React from 'react';
import buttonStyle from './buttons.module.css'

const Buttons = () => {
    return (
        <div className = {buttonStyle.wrap}>
            <button className = {buttonStyle.signIn}>Sign In</button>
            <button className = {buttonStyle.register}>Register</button>
        </div>
    );
};

export default Buttons