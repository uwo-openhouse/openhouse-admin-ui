import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Layout from './components/Layout';
import { getLocations } from './actions/locations';
import { getAreas } from './actions/areas';
import { getOpenHouses } from './actions/openHouses';
import { getEvents } from './actions/events';

const app = (renderTo) => {
    const store = configureStore();
    store.dispatch(getLocations());
    store.dispatch(getAreas());
    store.dispatch(getOpenHouses());
    store.dispatch(getEvents());
    ReactDOM.render(
        <Provider store={store}>
            <Layout />
        </Provider>, renderTo,
    );
};

export default app;
