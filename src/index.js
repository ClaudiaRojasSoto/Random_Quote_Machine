import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
