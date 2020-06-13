import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/stylesheets/main.scss";
import reducers from './reducers/index';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore , applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import RouteAPI from "./RouteAPI";
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';


const middleware = [];
if(process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger())
}

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <RouteAPI/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
