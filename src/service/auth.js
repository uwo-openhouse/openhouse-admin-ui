import moment from 'moment';
import { initToken } from '../actions/auth';
import { hasToken } from '../reducers';
import { gotoLoginPage } from './index';

const params = new URLSearchParams(window.location.hash.replace('#', ''));

export const isAuthEnabled = () => process.env.REACT_APP_AUTH_ENABLED.toLowerCase() === 'true';

export const getAuthHeaders = (token) => {
    let headers = {
        'content-type': 'application/json',
    };
    if (isAuthEnabled()) {
        headers = {
            ...headers,
            Authorization: `Bearer ${token}`,
        };
    }
    return new Headers(headers);
};

export const setupToken = (store) => {
    if (isAuthEnabled()) {
        const token = params.get('access_token');
        const expireTime = params.get('expires_in');
        if (token) {
            store.dispatch(initToken(token, moment().add(expireTime, 'seconds').unix()));
            window.history.replaceState(null, '', window.location.href.replace(window.location.hash, ''));
        }
        if (!hasToken(store.getState())) {
            gotoLoginPage();
        }
    }
};
