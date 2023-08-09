import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './reducers/quoteReducers';

const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});

export default store;
