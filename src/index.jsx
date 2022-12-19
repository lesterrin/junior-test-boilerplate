import React from 'react';
import ReactDOM from 'react-dom/client';

import store from './redux/store';
import Provider from 'react-redux/es/components/Provider';

import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
window.store = store;
root.render(
    <Provider store={store}>
        <App/>
    </Provider>,
);
