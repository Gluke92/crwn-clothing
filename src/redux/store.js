import {
    createStore,
    applyMiddleware
} from 'redux';
import { persistStore } from 'redux-persist';


import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; /* you may want to modify middlwares at some point */

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);

export default {store, persistor};