import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider>
  <App />
  </Provider >
  ,
  document.getElementById('root'));


