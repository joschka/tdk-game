import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers.js';

import App from './components/App.js';

const duration = {
  short: 10,
  medium: 30,
  long: 100,
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    dashboard: {
      size: 'large',
    },
    temperature: {
      current: 4.0,
      threshold: 1.5,
    },
    love: 40,
    clock: {
      isRunning: false,
      isFast: false,
      duration: 159 * 4, // 159 Monate (4 ticks == 1 month)
      tick: 0,
    },
    records: [],
    actions: [
      {
        id: '2',
        title: 'Klimaneutrale Industriegebiete',
        duration: duration.medium,
        temp: -0.25,
        love: 13,
        state: 'available',
      },
      {
        id: '3',
        title: 'Pfandsystem für Elektroaltgeräte (Kreislaufwirtschaft)',
        duration: duration.long,
        temp: -0.1,
        love: -1,
        state: 'available',
      },
      {
        id: '4',
        title: 'Wiedervernässung von Mooren',
        duration: duration.long,
        temp: -0.075,
        love: -10,
        state: 'available',
      },
      {
        id: '5',
        title: 'Schlachtbegrenzung für Schlachthöfe',
        duration: duration.medium,
        temp: -0.075,
        love: -10,
        state: 'available',
      },
      {
        id: '6',
        title: 'Stopp von klimaschädlichen Subventionen',
        duration: duration.short,
        temp: -0.025,
        love: -10,
        state: 'available',
      },
      {
        id: '7',
        title: 'E-Autos statt Verbrennungsmotor',
        duration: duration.medium,
        temp: -0.175,
        love: -10,
        state: 'available',
      },
      {
        id: '8',
        title: 'Vielflieger:innen Steuer',
        duration: duration.short,
        temp: -0.0375,
        love: -10,
        state: 'available',
      },
      {
        id: '9',
        title: 'Elektrifizierung von LKWs',
        duration: duration.short,
        temp: -0.1,
        love: -10,
        state: 'available',
      },
      {
        id: '10',
        title: 'Kohleausstieg',
        duration: 60,
        duration: duration.short,
        temp: -0.15,
        love: -10,
        state: 'available',
      },
      {
        id: '11',
        title: 'Photovoltaik und Windkraft Ausbau',
        duration: duration.medium,
        temp: -0.15,
        love: -10,
        state: 'available',
      },
      {
        id: '12',
        title: 'Energiespeicher Ausbau',
        duration: duration.medium,
        temp: -0.15,
        love: -10,
        state: 'available',
      },
      {
        id: '13',
        title: 'Förderung lokaler / kommunaler Stromanlagen',
        duration: duration.short,
        temp: -0.15,
        love: -10,
        state: 'available',
      },
      {
        id: '14',
        title: 'Sanierungsverpflichtung für Gebäude',
        duration: duration.long,
        temp: -0.175,
        love: -10,
        state: 'available',
      },
      {
        id: '15',
        title: 'Einbaustopp Öl- und Gasheizungen',
        duration: duration.short,
        temp: -0.0875,
        love: -10,
        state: 'available',
      },
    ],
    actionsVisible: false,
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
