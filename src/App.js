import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { getNextState } from './store/reducers';
import Test from './component/Test/Test';

const store = createStore(getNextState);

export const App = () => (
  <Provider store={store}>
    <Test />
  </Provider>
);
