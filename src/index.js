import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers.js';

import App from './components/App.js';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    temperature: {
      current: 40,
      threshold: 15,
    },
    love: 40,
    clock: {
      isRunning: false,
      duration: 700,
      tick: 0,
    },
    records: [],
    actions: [
      {
        id: '1',
        title: 'CO2-Steuer',
        duration: 10,
        temp: -5,
        love: 4,
        state: 'available',
      },
      {
        id: '2',
        title: 'Verbrenner verbieten',
        duration: 3,
        temp: -2,
        love: 13,
        state: 'available',
      },
      {
        id: '3',
        title: 'Moore renaturieren',
        duration: 20,
        temp: -10,
        love: -1,
        state: 'available',
      },
    ]
  },
});

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers.js', () => store.replaceReducer(rootReducer))
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
