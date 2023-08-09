import { createStore } from 'redux';
import quoteReducer from './reducers/quoteReducers';

const store = createStore(quoteReducer);

export default store;
