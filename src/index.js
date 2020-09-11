import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import 'font-awesome/css/font-awesome.min.css'


ReactDOM.render(
  <React.StrictMode>
    <script src='https://use.fontawesome.com/3bd7769ce1.js'></script>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 