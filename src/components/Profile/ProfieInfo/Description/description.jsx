import React from 'react';
import descr from './description.module.css'

const Description = (props) => {
    return (
        <div className = {descr.wrap}>
            <div><img src= {props.props.photos.large} alt="" /></div>
            <div className = {descr.infoContainer}>
                <div className = {descr.info}>{props.props.fullName}</div>
                <div className = {descr.info}>{props.props.aboutMe}</div>
                <div className = {descr.info}>{props.props.contacts.facebook}</div>
                <div className = {descr.info}>Work</div>
            </div>
        </div>
    );
}

export default Description