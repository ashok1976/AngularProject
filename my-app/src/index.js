import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
//import { createStore} from 'redux';
import {nameReducer,arrayReducer,couterReducer} from './reducer/reducers';
import thunk  from 'redux-thunk'
import { createStore,applyMiddleware,compose,combineReducers } from 'redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const masterReducer = combineReducers({
	 name : nameReducer,
	 wishes: arrayReducer,
	 myCouter : couterReducer,

	 
 })


const store = createStore(masterReducer,{name:'Ashok',wishes:['ashok','eat-'], myCouter:0},composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
 <Provider store={store}>
  <App />
   
  </Provider>  ,
 
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
