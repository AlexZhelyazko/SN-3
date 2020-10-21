import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from './components/Redux/state'

export let renderElem = (state) => {
    ReactDOM.render(
      <App state = {state} addPost = {addPost}/>,
      document.getElementById('root')
    );
  };