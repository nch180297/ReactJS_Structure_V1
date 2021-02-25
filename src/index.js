import 'nprogress/nprogress.css';
import 'src/assets/css/prism.css';
import 'src/assets/css/common.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { enableES5 } from 'immer';
import store from 'src/redux';
import App from 'src/App';

enableES5();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
