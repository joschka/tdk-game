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
    ui: {
      state: 'top',
    },
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
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.medium,
        temp: -0.25,
        love: 2,
        state: 'available',
      },
      {
        id: '3',
        title: 'Pfandsystem für Elektroaltgeräte (Kreislaufwirtschaft)',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.long,
        temp: -0.1,
        love: 1,
        state: 'available',
      },
      {
        id: '4',
        title: 'Wiedervernässung von Mooren',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.long,
        temp: -0.075,
        love: -1,
        state: 'available',
      },
      {
        id: '5',
        title: 'Schlachtbegrenzung für Schlachthöfe',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.medium,
        temp: -0.075,
        love: 1,
        state: 'available',
      },
      {
        id: '6',
        title: 'Stopp von klimaschädlichen Subventionen',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.short,
        temp: -0.025,
        love: 2,
        state: 'available',
      },
      {
        id: '7',
        title: 'E-Autos statt Verbrennungsmotor',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.medium,
        temp: -0.175,
        love: -3,
        state: 'available',
      },
      {
        id: '8',
        title: 'Vielflieger:innen Steuer',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.short,
        temp: -0.0375,
        love: 2,
        state: 'available',
      },
      {
        id: '9',
        title: 'Elektrifizierung von LKWs',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.short,
        temp: -0.1,
        love: -1,
        state: 'available',
      },
      {
        id: '10',
        title: 'Kohleausstieg jetzt',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: 60,
        duration: duration.short,
        temp: -0.15,
        love: 2,
        state: 'available',
      },
      {
        id: '11',
        title: 'Photovoltaik und Windkraft Ausbau',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.medium,
        temp: -0.15,
        love: -1,
        state: 'available',
      },
      {
        id: '12',
        title: 'Energiespeicher Ausbau',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.medium,
        temp: -0.15,
        love: 0,
        state: 'available',
      },
      {
        id: '13',
        title: 'Förderung lokaler / kommunaler Stromanlagen',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.short,
        temp: -0.15,
        love: 2,
        state: 'available',
      },
      {
        id: '14',
        title: 'Sanierungsverpflichtung für Gebäude',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.long,
        temp: -0.175,
        love: -3,
        state: 'available',
      },
      {
        id: '15',
        title: 'Einbaustopp Öl- und Gasheizungen',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.short,
        temp: -0.0875,
        love: -1,
        state: 'available',
      },
      {
        id: '16',
        title: 'CO2 Bepreisung',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.short,
        temp: -0.725,
        love: -3,
        state: 'available',
      },
      {
        id: '17',
        title: 'Klimaneutrale Staatsausgaben',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        duration: duration.short,
        temp: -0.125,
        love: 2,
        state: 'available',
      },
    ],
    actionsVisible: false,
    actionShown: null,
    activeActionsMinimized: true,
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
