import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './rootReducer'
import thunkMiddleware from 'redux-thunk'

const middlewares = [];
middlewares.push(logger);
middlewares.push(thunkMiddleware);

export const store = createStore(rootReducer,applyMiddleware(...middlewares))

export const persistor = persistStore(store);

export default {store, persistor}