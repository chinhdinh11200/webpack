import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {createStore, compose, applyMiddleware } from 'redux';
import appReducer from './reducers/index'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  appReducer,
  composeEnhancer(applyMiddleware(thunk)),
  
)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
