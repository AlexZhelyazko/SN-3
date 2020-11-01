import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './components/Redux/state'
import App from './App';

let renderElem = (state) => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById('root')
  );
};

renderElem(store.getState())

store.subscribe(renderElem)