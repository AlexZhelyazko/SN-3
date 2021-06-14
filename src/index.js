import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './components/Redux/store-redux'
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>,
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state)
})