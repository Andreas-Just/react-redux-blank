import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const middlewares = [thunk];
const configureStore = () => (
  createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  )
);

const store = configureStore({});

export default store;
