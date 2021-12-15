
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
var reducer = require('./reducers/reducer');
 //var store = redux.createStore(reducer);
 var store = createStore(reducer, applyMiddleware(thunk));
 store.subscribe( ()=>{console.log(store)})
 module.exports = store;