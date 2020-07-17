import {createStore} from 'redux';
import todoReducer from '../reducers';

const todoStore=createStore(todoReducer);
export default todoStore;