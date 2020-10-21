import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from './components/Redux/state'

export let renderElem = (props) => {
    ReactDOM.render(
      <App state = {props.state} addPost = {addPost}/>,
      document.getElementById('root')
    );
  };