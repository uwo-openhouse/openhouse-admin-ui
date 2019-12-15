import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Layout from './components/Layout';
import { getLocations } from './actions/locations';

const app = (renderTo) => {
    const store = configureStore();
    store.dispatch(getLocations());
    ReactDOM.render(
        <Provider store={store}>
            <Layout />
        </Provider>, renderTo,
    );
};

export default app;
