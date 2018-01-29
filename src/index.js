// // // // // // // // // // // // 
//
//	React Render Root
//
// // // // // // // // // // // // 

import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App   from 'components/app';
import store from 'store';

import 'css/screen.min.css';

// ES6 Polyfills 
import 'babel-polyfill';
require('string.prototype.includes');
require('string.prototype.startswith'); 

const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    rootEl
)

if (module.hot) {
    module.hot.accept('components/app', () => {
        const NextApp = require('components/app').default;
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <NextApp />
                </Router>
            </Provider>,
            rootEl
        )
    })
}
