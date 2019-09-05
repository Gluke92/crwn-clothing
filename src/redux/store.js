import {
    createStore,
    applyMiddleware
} from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; /* you may want to modify middlwares at some point */

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;