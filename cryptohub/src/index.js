import React from 'react';
// import ReactDOM from 'react-dom';
import Appl from './Appl';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/reset.css';
import { App } from 'antd';
import {Provider} from 'react-redux';

import store from'./app/store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App>
                    <Appl />
                </App>
            </Provider>
        </Router>
    </React.StrictMode>
);