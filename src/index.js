import React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

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
      stopped: undefined,
      introStep: 0,
    },
    vars: {},
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
      // stack starts with 1, because clock is initially stopped
      // every "stop" adds +1, every "start" substracts 1, if stack = 0 => isRunning = true
      stack: 1,
      isRunning: false,
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
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "7",
        title: "E-Autos statt Verbrennungsmotor",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.medium,
        temperature: -0.175,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "9",
        title: "Elektrifizierung von LKWs",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.short,
        temperature: -0.1,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "10",
        title: "Kohleausstieg jetzt",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        link:
          "https://assets.website-files.com/5e663c02af4002dcdcab78dc/5ece7812eb97a0be582bad67_Der%201%2C5-Grad-Klimaplan%20f%C3%BCr%20Deutschland.pdf#page=22",
        duration: duration.short,
        temperature: -0.15,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "11",
        title: "Photovoltaik und Windkraft Ausbau",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.medium,
        temperature: -0.15,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "12",
        title: "Energiespeicher Ausbau",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.medium,
        temperature: -0.15,
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
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "15",
        title: "Einbaustopp Öl- und Gasheizungen",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.short,
        temperature: -0.0875,
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
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "17",
        title: "Klimaneutrale Staatsausgaben",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        duration: duration.short,
        temperature: -0.125,
        state: "available",
        activeSinceTick: null,
      },
    ],
    actionPartitions: ["active", "available", "ended"],
    actionsSortBy: "temperature",
    actionsSortOrder: "desc",
    actionsVisibleStack: 0,
    actionsVisible: true,
    actionShown: null,
    activeActionsMinimized: true,
    /*
     * Conditional Events
     * shown once(!) when condition is true
     *
     */
    conditionalEvents: [
      {
        // BEISPIEL
        // "id" must be unique (important)
        // you can also use strings, e.g. "xy-event"
        id: 1,
        // "condition"
        // available variables:
        // - "tick": integer, 1 tick = 1/4 month
        // - "temperature": float
        // - "love": integer (0-100) (Beliebtheit)
        // - "vars": access some variable you set before in another event (boolean, it's set or not)
        // - "done": array of ids of ended actions (Maßnahmen), e.g. ["1", "13"]
        // Examples:
        // condition: "temperature >= 3",
        // condition: "temperature >= 2 && temperature < 4",
        // condition: "tick > 100 || love < 30",
        // condition: "vars.foobar && tick > 400",
        // condition: "done.includes("1") && tick > 400",
        // condition: "temperature >= 3 || (done.includes("1") && tick > 400) || vars.lala",
        condition: "false && (tick > 1 || temperature > 3 && temperature < 4)",
        // "probability"
        // additional to condition
        // optional: if not set, probability is 100%
        // when condition evaluates to true and probability = 1 then the event is always triggered (probability = 100%)
        // when e.g. probability = 0.7 (70%), then there is 30% chance that the event is not triggered (the event is still discarded and won't be tried again)
        // probability: 0.1, DONT USE!!! (buggy)
        // "slides"
        // available types:
        // - news (Zeitung)
        // - text (einfacher Text)
        // - vote (Wahlergebnis)
        // - game-over (Spielende)
        // - love-change (Änderung der Beliebtheit)
        // - temperature-change (geht auch "silent" ohne Anzeige des Slides)
        // - multiple-choice
        slides: [
          {
            type: "news",
            title: "Titel bla 1111111",
            text: "Text bla",
          },
          {
            type: "love-change",
            love: -5,
            text: "Text bla",
          },
          {
            type: "multiple-choice",
            text:
              "Die Autolobby erklärt Sie öffentlich für nicht zurechnungsfähig. Wie reagieren Sie?",
            // "answers"
            // text is mandatory
            // available outcomes:
            // - "slides": add more slides
            // - "variable": set a variable (provide the name)
            // both outcomes can be combined
            answers: [
              {
                text: "Ich begebe mich unverzüglich in Behandlung.",
                slides: [
                  {
                    type: "love-change",
                    love: -5,
                    text: "Text bla",
                  },
                ],
              },
              {
                text:
                  "Ich ignoriere die Vorwürfe, weil die Autolobby keine Rolle spielt.",
                variable: "foobar",
              },
              {
                text:
                  "Ich erkläre, dass das alles ein Missverständnis ist und zähle die Vorteile für eine vorwärtsgewandte Autoindustrie auf.",
                variable: "foobaz",
                slides: [
                  {
                    type: "love-change",
                    love: 10,
                    text: "Text bla",
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        // Gewonnen
        id: "win",
        condition: "temperature <= 1.5",
        slides: [
          {
            type: "game-over",
            text: "GEWONNEN!!!",
            background: "biertisch",
          },
        ],
      },



      {
        // kurz vor der 1. Wahl
        id: "talkshow-vor-wahl1",
        condition: "tick == 193",
        slides: [
          {
            type: "multiple-choice",
            background: "talkshow",
            title: "Morgen wird in Deutschland gewählt",
            text:
              "Ihre Bilanz nach 4 Jahren Kanzlerschaft: Alles wurde teurer und das Klima ist trotzdem nicht gerettet. Wie erklären Sie das?",
            answers: [
              {
                text:
                  "Umbau braucht Zeit. Nach der Wahl geht es weiter.",
                slides: [
                  {
                    type: "love-change",
                    love: -5,
                    silent: true
                  }
                ],
              },
              {
                text:
                  "Nur wenn Sie mich wiederwählen, kann ich unser Klima retten. Ich bitte Sie im Namen des Überlebens: Machen Sie ihr Kreuz bei mir.",
                slides: [
                  {
                    type: "love-change",
                    love: 10,
                    silent: true
                  }
                ],
              }
            ],
          }
        ]
      },




      {
        // Wahl verloren
        id: "vote-lost",
        condition: "(tick == 194 || tick == 388 || tick == 582) && love < 30",
        slides: [
          {
            type: "vote",
            text: "Wahlabend 18 Uhr: Jörg Schönenborn präsentiert die Hochrechnung:",
            background: "wahl",
            // Gewichtung der anderen Balken
            others: [1, 1.5, 2, 0.2],
          },
          {
            type: "game-over",
            text: "Leider verloren",
            background: "biertisch",
          },
        ],
      },

      {
        // Wahl gewonnen
        id: "vote-won",
        condition: "(tick == 194 || tick == 388 || tick == 582) && love >= 30",
        slides: [
          {
            type: "vote",
            text: "Wahlabend 18 Uhr: Jörg Schönenborn präsentiert die Hochrechnung:",
            background: "wahl",
            // Gewichtung der anderen Balken
            others: [1, 1.5, 2, 0.2],
          },
          {
            type: "text",
            text: "Wahlsieg! Sie bleiben 4 weitere Jahre im Amt!",
            background: "jubel",
          },
        ],
      },

      {
        // follow up zu Schlachthöfe (ohne Interaktion)
        id: "follow-up-5",
        condition: "done.includes('5')",
        slides: [
          {
            type: "temperature-change",
            temperature: -1,
            silent: true,
          },
        ],
      },

      {
        // follow up zu Kohleausstieg
        id: "follow-up-10",
        condition: "done.includes('10')",
        slides: [
          {
            type: "news",
            title: "Kohleausstieg umgesetzt",
            text:
              "You made it. Nach dem Austieg aus der Kernkraft, folgt nun der Ausstieg aus der Kohle. Deutschland ist Ausstiegsweltmeister.",
            background: "yellow",
            newspaper: "zeit",
          },
          {
            type: "text",
            text:
              "<p>Einfacher Text-Slide</p><p><strong>Lorem ipsum</strong></p>",
            background: "biertisch",
            position: "bottom",
          },
          {
            type: "temperature-change",
            temperature: -0.15,
            background: "jubel",
            text: "Juhu, Temperatur sinkt.",
          },
          {
            type: "multiple-choice",
            text:
              "Australien bestellt Ihre Botschafterin ein. Man fürchtet durch den Kohleaustritt Rufschädigung.",
            answers: [
              {
                text:
                  "Ich beschimpfe Australien als Hinterwäldler-Gefängnis-Kontinent.",
                slides: [
                  {
                    type: "love-change",
                    love: 8,
                    text:
                      "Ihr Schimpftirade kommt gut an. Die Deutschen erfreuen sich immer daran, mit dem Finger auf andere zu zeigen. Ihre Beliebheit steigt!",
                    background: "jubel",
                  },
                ],
              },
              {
                text:
                  "Ich behandle die Sache diskret hinter verschlossenen Türen. Ist doch alles nur eine PR-Maßnahme für die FFF-Generation.",
                slides: [
                  {
                    type: "news",
                    title: "LEAK! Kohleausstieg nur PR",
                    text:
                      "Ein Mitschnitt Ihrer Hinterzimmerdiplomatie ist aufgetaucht und sorgt für Empörung.",
                    background: "blue",
                    newspaper: "faz",
                  },
                  {
                    type: "love-change",
                    love: -14,
                    text:
                      "Die Empörung ist groß. Ihre Umfragwerte gehen nach unten.",
                    background: "yellow",
                  },
                ],
              },
              {
                text: "Ich gründe eine Arbeitsgruppe.",
                slides: [
                  {
                    type: "love-change",
                    love: 5,
                    text:
                      "Arbeitsgruppe ist okay. Ihnen wird Wohlwollen, aber kein Beifall entgegengebracht.",
                    background: "green",
                  },
                ],
              },
            ],
          },
        ],
      },


      //Playground



      {
        // co2 bepreisung
        id: "co2bepreisung-gestartet",
        condition: "started.includes('16')",
        slides: [          
          {
            type: "multiple-choice",
            background: "buero",
            text:
              "Wieviel Steuer soll auf eine Tonne CO2 zukünftig erhoben werden?",
            answers: [
              {
                text:
                  "50 € – etws mehr als bisher",
                variable: "tonnenpreis50"
              },
              {
                text:
                  "200 €",
                variable: "tonnenpreis200"
              },
              {
                text:
                  "500 €",
                variable: "tonnenpreis500"
              },
              {
                text:
                  "1500 € – der reale Preis einschl. aller Umweltfolgekosten",
                variable: "tonnenpreis1500"
              }
            ]
          }
        ],
      },


      {
        // co2 zu teuer für lobby
        id: "co2bepreisung-zuteuer-fuer-lobby",
        condition: "vars.tonnenpreis1500",
        slides: [          
          {
            type: "multiple-choice",
            background: "buero",
            text:
              "Der Präsident des obersten Industrieverbandes steht plötzlich in Ihrem Büro",
            answers: [
              {
                text:
                  "Ihn wegschicken",
                variable: "lobbyhasstmich"
              },
              {
                text:
                  "Seiner Einladung folgen",
                slides: [

                  {
                    type: "text",
                    background: "kaminzimmer",
                    text: "Industrie-Präsident:<br> \"Wenn Sie den CO2-Preis von 1.500 wirklich umsetzen wollen, verlieren wir Millionen von Jobs. Bevor das passiert, verlieren Sie Ihren. Dafür sorgen wir.\""
                  },
                  {
                    type: "multiple-choice",
                    background: "kaminzimmer",
                    text: "Ich will Ihnen ein Angebot unterbreiten: Sie heben den CO2-Preis auf nur 50 Euro und dafür investiert die gesamte deutsche Industrie in den nächsten 10 Jahren 500 Milliarden Euro in neue Technologie, die CO2 aus der Luft saugt. Sie erreichen Ihr Klimaziel und wir erhalten die Jobs.",

                    answers: [
                      {
                        text:
                          "Ok, machen wir!",
                        variables: "tonnenpreis50",
                      },
                      {
                        text:
                          "Nein, danke.",
                        variables: "lobbyhasstmich",
                      }
                    ],
                  }

                ]

              },
              {
                text:
                  "500 €",
                variable: "tonnenpreis500"
              },
              {
                text:
                  "1500 € – der reale Preis einschl. aller Umweltfolgekosten",
                variable: "tonnenpreis1500"
              },

            ],
          },
        ],
      },





      {
        // testscreens
        id: "michastest",
        condition: "tick == 10",
        slides: [
          {
            type: "text",
            text:
              "<p>Willkommen an Ihrem neuen Arbeitsplatz</p>",
            background: "buero",
            position: "top",
          },
          {
            type: "news",
            title: "Folgen den Versprechen nun auch Taten?",
            text:
              "Der Druck in der Presse steigt. Fangen Sie an, erste Maßnahmen umzusetzen.",
            background: "zeitung",
            newspaper: "zeit",
          },          
          {
            type: "multiple-choice",
            background: "interview",
            text:
              "Warum gibt es noch immer keinen Gesetzesentwurf von Ihnen?",
            answers: [
              {
                text:
                  "Ich musste mich erst ins Amt einfinden",
                slides: [
                  {
                    type: "love-change",
                    love: -8,
                    text:
                      "Glauben Sie, die Klimakrise wartet auf Sie? Die Bürger lachen über Sie.",
                    background: "biertisch",
                  },
                ],
              },
              {
                text:
                  "Große Änderungen brauchen Vorlauf. Sie werden bald großes von mir hören!",
                slides: [
                  {
                    type: "news",
                    title: "Kann Bohmeyer noch Klima?",
                    text:
                      "Große Änderungen wurden angekündigt? Ist da was dran oder nur heiße Luft? Das Kanzleramt hält sich bedeckt.",
                    background: "zeitung",
                    newspaper: "faz",
                  },
                  {
                    type: "love-change",
                    love: -1,
                    text:
                      "Fangen Sie am besten mit dem Kohleausstieg an, das haben Sie immerhin in der Wahl versprochen.",
                    background: "zeitung",
                  },
                ],
              }
            ],
          },
        ],
      },







    ],
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
