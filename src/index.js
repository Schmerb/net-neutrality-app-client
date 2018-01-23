// // // // // // // // // // // // 
//
//	React Render Root
//
// // // // // // // // // // // // 

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'components/app';
import store from 'store';

// import 'css/screen.min.css';

// ES6 Polyfills 
require('string.prototype.includes');
require('string.prototype.startswith');


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
