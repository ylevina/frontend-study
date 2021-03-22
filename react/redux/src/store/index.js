import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { productsReducer, MODULE_NAME as productsModuleName } from './products';
import { modalReducer, MODULE_NAME as modalModuleName } from './modal';

const rootReducer = combineReducers({
    [productsModuleName]: productsReducer,
    [modalModuleName]: modalReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log(store.getState());

export default store; 