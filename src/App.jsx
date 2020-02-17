import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './configureStore';
import Layout from './components/Layout';
import { getLocations } from './actions/locations';
import { getAreas } from './actions/areas';
import { getOpenHouses } from './actions/openHouses';
import { getEvents } from './actions/events';
import { getEateries } from './actions/eateries';
import { setupToken } from './service/auth';

const app = (renderTo) => {
    const { store, persistor } = configureStore();
    store.dispatch(getLocations());
    store.dispatch(getAreas());
    store.dispatch(getOpenHouses());
    store.dispatch(getEvents());
    store.dispatch(getEateries());
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate
                loading={null}
                persistor={persistor}
                onBeforeLift={() => {
                    setupToken(store);
                }}
            >
                <Layout />
            </PersistGate>
        </Provider>, renderTo,
    );
};

export default app;
