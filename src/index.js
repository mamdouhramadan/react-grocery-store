import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

import "@assets/css/bootstrap.min.css";
import "@assets/css/font-awesome.min.css";
import "@assets/css/elegant-icons.css";
import "@assets/css/nice-select.css";
import "@assets/css/owl.carousel.min.css";
import "@assets/css/slicknav.min.css";
import "@assets/css/style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

