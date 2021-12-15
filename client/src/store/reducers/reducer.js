import rootReducer from './rootReducer';

var redux = require('redux');

var reducer = redux.combineReducers({ rootReducer});

export default reducer;
