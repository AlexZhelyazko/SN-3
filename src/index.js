import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state from './components/Redux/state'
import App from './App';
import {addPost} from './components/Redux/state'
import {updateNewPostText} from './components/Redux/state'
import {subscribe} from './components/Redux/state'

export let renderElem = (state) => {
    ReactDOM.render(
      <App state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText}/>,
      document.getElementById('root')
    );
  };

  renderElem(state)

  subscribe(renderElem)