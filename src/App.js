import React from 'react';
import { Provider } from 'react-redux';
import Test from './component/Test';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Test />
  </Provider>
);

export default App;
