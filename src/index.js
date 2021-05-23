import React from "react";
import {render} from "react-dom";

import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

import rootReducer from "./reducers.js";

import App from "./components/App.js";

const duration = {
  short: 10,
  medium: 30,
  long: 100,
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    game: {
      started: false,
      introStep: 0,
    },
    ui: {
      state: "top",
    },
    dashboard: {
      size: "large",
    },
    temperature: {
      current: 4.0,
      threshold: 1.5,
    },
    love: 40,
    clock: {
      isRunning: false,
      isRunningMain: true,
      isRunningOverlay: true,
      isRunningButton: true,
      isFast: true,
      duration: 159 * 4, // 159 Monate (2 ticks == 1 month)
      tick: 0,
    },
    records: [],
    actions: [
      {
        id: "2",
        title: "Klimaneutrale Industriegebiete",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.medium,
        temperature: -0.25,
        love: 2,
        state: "available",
        image: "industry",
        activeSinceTick: null,
      },
      {
        id: "3",
        title: "Pfandsystem für Elektroaltgeräte (Kreislaufwirtschaft)",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.long,
        temperature: -0.1,
        love: 1,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "4",
        title: "Wiedervernässung von Mooren",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.long,
        temperature: -0.075,
        love: -1,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "5",
        title: "Schlachtbegrenzung für Schlachthöfe",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.medium,
        temperature: -0.075,
        love: 1,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "6",
        title: "Stopp von klimaschädlichen Subventionen",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.short,
        temperature: -0.025,
        love: 2,
        state: "available",
        successImage: 'newspaper',
        activeSinceTick: null,
      },
      {
        id: "7",
        title: "E-Autos statt Verbrennungsmotor",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.medium,
        temperature: -0.175,
        love: -3,
        state: "available",
        image: "tesla",
        activeSinceTick: null,
      },
      {
        id: "9",
        title: "Elektrifizierung von LKWs",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.short,
        temperature: -0.1,
        love: -1,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "10",
        title: "Kohleausstieg jetzt",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: 60,
        duration: duration.short,
        temperature: -0.15,
        love: 2,
        state: "available",
        image: "kohle",
        activeSinceTick: null,
      },
      {
        id: "11",
        title: "Photovoltaik und Windkraft Ausbau",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.medium,
        temperature: -0.15,
        love: -1,
        state: "available",
        image: "solar-wind",
        activeSinceTick: null,
      },
      {
        id: "12",
        title: "Energiespeicher Ausbau",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.medium,
        temperature: -0.15,
        love: 0,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "13",
        title: "Förderung lokaler / kommunaler Stromanlagen",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.short,
        temperature: -0.15,
        love: 2,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "14",
        title: "Sanierungsverpflichtung für Gebäude",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.long,
        temperature: -0.175,
        love: -3,
        state: "available",
        image: "sanierung",
        activeSinceTick: null,
      },
      {
        id: "15",
        title: "Einbaustopp Öl- und Gasheizungen",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.short,
        temperature: -0.0875,
        love: -1,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "16",
        title: "CO<sub>2</sub> Bepreisung",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.short,
        temperature: -0.725,
        love: -3,
        state: "available",
        image: "wallstreet",
        activeSinceTick: null,
      },
      {
        id: "17",
        title: "Klimaneutrale Staatsausgaben",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.short,
        temperature: -0.125,
        love: 2,
        state: "available",
        activeSinceTick: null,
      },
    ],
    actionPartitions: ["active", "available", "ended"],
    actionsSortBy: "temperature",
    actionsSortOrder: "desc",

    actionsVisible: false,
    actionShown: null,
    activeActionsMinimized: true,
    futures: {
      10000: [{type: "foo"}, {type: "bar"}],
    },
  },
});

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./reducers.js", () => store.replaceReducer(rootReducer));
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
