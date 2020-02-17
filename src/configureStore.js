
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import allReducers from './reducers';

const logger = createLogger({
    collapsed: true,
});

const composeEnhancers = composeWithDevTools({});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

export default function configureStore() {
    const reducer = combineReducers(allReducers);
    const persistedReducer = persistReducer(persistConfig, reducer);
    const middleware = composeEnhancers(applyMiddleware(thunk, promise, logger));
    const store = createStore(persistedReducer, middleware);
    const persistor = persistStore(store);
    return { store, persistor };
}
