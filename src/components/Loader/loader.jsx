import React from 'react'
import loadSt from './style.module.css'
const Loader = (props) => {
    return <div class={loadSt.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
};

export default Loader;