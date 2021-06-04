import React from 'react';
import descr from './description.module.css'

const Description = (props) => {
    return (
        <div className = {descr.wrap}>
            <div style = {{width: '50px', height: '50px', border: 'solid black 1px', margin: '10px', backgroundColor: 'orange', borderRadius: '50px'}}></div>
            <div className = {descr.infoContainer}>
                <div className = {descr.info}>Gender</div>
                <div className = {descr.info}>Birthday</div>
                <div className = {descr.info}>City</div>
                <div className = {descr.info}>Work</div>
            </div>
        </div>
    );
}

export default Description