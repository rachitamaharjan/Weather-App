import { createStore, applyMiddleware } from 'redux';
import {mainReducer} from './reducer.js'
import thunkMiddleware from 'redux-thunk'

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));

export default store;