import React from 'react';
import Description from './Description/description'

const ProfileInfo = (props) => {
    return (
        <div>
             <Description props = {props.props}/>
        </div>
    );
}

export default ProfileInfo