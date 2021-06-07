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
        id: "co2bepreisung",
        title: "CO2-Bepreisung",
        sector: "industry",
        description:
          "Beim Zertifikatehandel muss für jede ausgestoßene Emission ein Zertifikat ersteigert werden, Verschmutzungsrechte sozusagen.<br/><br />Aus Klimaschutzperspektive ist der CO2 Preis eigentlich ein geniales Instrument, weil fast alle Emissionsquellen – vom Industriekraftwerk bis zum Lkw - erfasst werden könnten und mit der Anzahl der ausgegebenen Zertifikate die Emissionsmenge begrenzt werden kann, die jährlich ausgestoßen werden darf. Wie beim Spiel „Reise nach Jerusalem“ können schrittweise die Zertifikate so aus dem Verkehr gezogen werden, dass wir klimaneutral werden, ohne unser Restbudget zur Erreichung des 1,5-Grad-Ziels zu überschreiten. Durch die Knappheit erhöht sich der Zertifikatspreis – und damit der Anreiz auf klimaneutrale Technologien umzusteigen - automatisch.",
        duration: duration.medium, //?
        temperature: -0.78125,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "mehrwege",
        title: "Kreislaufwirtschaft",
        sector: "industry",
        description:
          "Durch den Aufbau einer Kreislaufwirtschaft werden bestehende Materialien und Produkte so lange wie möglich in Benutzung gehalten. Das geschieht im Wesentlichen durch Wiederverwendung, Reparatur und Recycling. Dadurch werden Emissionen eingespart, die ansonsten für die energieaufwändige Produktion von Primärmaterialien anfallen würden.",
        duration: duration.long,
        temperature: -0.4375,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "moore",
        title: "Moore nass machen",
        sector: "agriculture",
        description:
          "95% der Moore in Deutschland wurden trockengelegt, aber nur nasse Moore speichern CO2 – also: Moore nass machen!",
        duration: duration.long,
        temperature: -0.09375,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "tiere",
        title: "Massentierhaltung beenden",
        sector: "agriculture",
        description:
          "Es werden nur noch so viele Tiere gehalten, wie das Land ernähren kann und ein Emissionshandel für tierische Produkte eingeführt: Etwa zwei Drittel der Emissionen des Landwirtschaftsbereichs stammen direkt aus der Tierhaltung. Durch einen Emissionshandel für tierische Produkte könnten diese Emissionen durch eine schrittweise Reduktion der Zertifikatsmenge zielgenau und kosteneffizient gesenkt werden.",
        duration: duration.medium,
        temperature: -0.09375,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "eautos",
        title: "E-Autos statt Verbrenner",
        sector: "mobility",
        description:
          "Elektro statt Verbrennungsmotoren ab 2025: Uff ein schwieriges Thema in Deutschland: Das einzige EU-Land ohne Tempolimit. Die Emissionen dieses Bereichs lagen 2019 exakt genauso hoch wie 1990 – es tut weh, aber wir müssen hier ran.",
        duration: duration.medium,
        temperature: -0.21875,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "zuege",
        title: "Zuverlässige Züge",
        sector: "mobility",
        description:
          "Noch ist der Zug nicht abgefahren(höhöhö) – aber der Deutschlandtakt ist nur dann flächendeckend realisierbar, wenn verbindlich festgelegt wird, dass Fernverkehr auch dort stattfindet, wo wir ihn brauchen und nicht nur dort, wo er betriebswirtschaftlich rentabel ist.",
        duration: duration.medium,
        temperature: -0.171875,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "kohleausstieg",
        title: "Kohleausstieg",
        sector: "energy",
        description:
          "Erneuerbar erzeugter Strom ersetzt die fossilen Energieträger Gas, Kohle und Benzin in den Sektoren Wärme, Industrie und Verkehr vollständig. Wir fahren zukünftig mit Wind- und Solarenergie Elektroautos, erzeugen Wärme mit Wärmepumpen und stellen Industrieprozesse um. Dazu muss die elektrische Energie teilweise in andere Energieträger gewandelt - u.a. Wasserstoff, Power-to-X, - und Energiespeicher ausgebaut werden.",
        duration: duration.short,
        temperature: -0.1875,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "solarwind",
        title: "Sonnen- und Windkraft",
        sector: "energy",
        description:
          "Strom als Energieträger der Zukunft wird in zwei komplementären Bereichen erzeugt:<br /><br />Lokale Energiegemeinschaften: Eine dezentrale Energieerzeugung bietet gegenüber einer zentralen die Vorteile, dass sie für eine Stabilität des Netzes sorgt, lange Transportwege vermeidet sowie die Teilhabe und damit auch Akzeptanz unter Bürger:innen erhöht.<br /><br />Regionale EE-Kraftwerke: Der erforderliche Zubau von erneuerbaren Energien kann nicht von Bürger- und Industriequartieren allein bewältigt werden. Insbesondere für den hohen Energiebedarf der Industrie werden regionale „Kraftwerke“ großer Solar- und Windenergieanlagen benötigt, die große Mengen Strom erzeugen und die unabhängig agierenden und sich entfaltenden Energiegemeinschaften ergänzen.",
        duration: duration.medium,
        temperature: -0.1875,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "reparieren",
        title: "Reparieren statt Abreißen",
        sector: "buildings",
        description:
          "Gebäude sanieren statt abreißen, Umbau vereinfachen statt neubauen. Hürden für Nutzungsänderungen und Umbauten im Bauordnungsrecht werden abgebaut. Für den Abriss von Gebäuden gilt künftig eine Genehmigungspflicht.<br /><br />Um bis 2035 im Gebäudesektor klimaneutral zu werden, müssen wir den hohen Energieverbrauch durch die Gebäude (30% des Gesamtenergieverbrauchs in Deutschland) reduzieren, indem wir sie besser dämmen. Gleichzeitig geht es darum, von fossilen Energieträgern auf strombasierte Wärmepumpen umzusteigen.<br /><br />Das jetzige Gebäude-Energiegesetz regelt einzig und allein den Betrieb unserer Gebäude.Wir betrachten den ganzen Lebenszyklus von Gebäuden. Vom Rohstoff zum Bau, vom Betrieb zum Rückbau. Häuser sollten schon so geplant werden, dass ihre Bestandteile kreislauffähig sind und kein Abfall entsteht.",
        duration: duration.medium,
        temperature: -0.328125,
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
            background: "zeitung",
          },
          {
            type: "text",
            text: "Text berater",
            background: "berater",
            position: "bottom",
          },
          {
            type: "text",
            text: "Text kaminzimmer",
            background: "kaminzimmer",
            position: "bottom",
          },
          {
            type: "text",
            text: "Text parlament",
            background: "parlament",
            position: "bottom",
          },
          {
            type: "text",
            text: "Text interview",
            background: "interview",
            position: "top",
          },
          {
            type: "text",
            text: "Text biertisch",
            background: "biertisch",
            position: "top",
          },
          {
            type: "text",
            text: "Text buero",
            background: "buero",
            position: "top",
          },
          {
            type: "text",
            text: "Text talkshow",
            background: "talkshow",
            position: "top",
          },
          {
            type: "text",
            text: "Text jubel",
            background: "jubel",
            position: "top",
          },
          {
            type: "text",
            text: "Text yellow",
            background: "yellow",
          },
          {
            type: "love-change",
            love: -5,
            text: "love-change",
          },
          {
            type: "temperature-change",
            temperature: -0.5,
            text: "temperature-change",
          },
          {
            type: "vote",
            text:
              "Wahlabend 18 Uhr: Jörg Schönenborn präsentiert die Hochrechnung:",
            background: "wahl",
            // Gewichtung der anderen Balken
            others: [1, 1.5, 2, 0.2],
          },
          {
            type: "multiple-choice",
            text: "what do you want?",
            background: "interview",
            // "answers"
            // text is mandatory
            // available outcomes:
            // - "slides": add more slides
            // - "variable": set a variable (provide the name)
            // both outcomes can be combined
            answers: [
              {
                text: "verlieren",
                slides: [
                  {
                    type: "game-over",
                    text: "Leider verloren",
                    background: "biertisch",
                  },
                ],
              },
              {
                text: "gewinnen",
                slides: [
                  {
                    type: "game-over",
                    text: "Gewonnen",
                    background: "jubel",
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
  condition: "tick == 636 && temperature <= 1.5",
  slides: [
    {
      type: "game-over",
      text: "GEWONNEN!!!",
      background: "jubel",
    },
  ],
},

{
  // Verloren
  id: "lost",
  condition: "tick == 636 && temperature > 1.5",
  slides: [
    {
      type: "game-over",
      text: "Verloren",
      background: "biertisch",
    },
  ],
},

{
  // Wahl verloren
  id: "vote-lost",
  condition: "(tick == 194 || tick == 388 || tick == 582) && love < 10",
  slides: [
    {
      type: "vote",
      text:
        "Wahlabend 18 Uhr: Jörg Schönenborn präsentiert die Hochrechnung:",
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
  condition: "(tick == 194 || tick == 388 || tick == 582) && love >= 10",
  slides: [
    {
      type: "vote",
      text:
        "Wahlabend 18 Uhr: Jörg Schönenborn präsentiert die Hochrechnung:",
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
  // Erinnerung: Wenn Kohlausstieg bis 2028 noch nicht gemacht
  id: "kohle-reminder",
  condition: "tick > 304 && !(started.includes('kohleausstieg') || done.includes('kohleausstieg'))",
  slides: [
    {
      type: "text",
      text: "„Ähem. Es wäre an der Zeit, in den Kohleausstieg einzusteigen – meinen Sie nicht?“",
      background: "berater",
      position: "bottom",
    },
    {
      type: "multiple-choice",
      text: "",
      background: "berater",
      answers: [
        {
          text: "Völlig richtig. Los geht’s.",
          slides: [
            {
              type: "news",
              title: "KEINE KOHLE.",
              text: "Wird Strom jetzt noch teurer?",
              background: "zeitung"
            }
          ]
        },
        {
          text: "Bei so viel Widerstand bleibe ich lieber bei der Kohle.",
          slides: [
            {
              type: "news",
              title: "VERPSPROCHEN: GEBROCHEN.",
              text: "Regierung schiebt Zukunft auf die lange Bank.",
              background: "zeitung"
            } 

          ]
        }
      ]
    }

  ]


},


{
  id: "follow-up-tiere",
  condition: "done.includes('tiere')",
  slides: [
    {
      type: "text", // text, multiple-choice
      background: "berater", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      text: "Die Abschaffung der Massentierhaltung ist seit Wochen DAS Thema...",      
      position: "bottom",
    },
    {
      type: "news", // text, multiple-choice
      background: "zeitung", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "WARUM DER PREIS NICHT WURST IST!",
      text: "Deutschlands neue Armuts-Vegetarier",      
    },
    {
      type: "news", // text, multiple-choice
      background: "zeitung", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "WARUM DER PREIS NICHT WURST IST!",
      text: "Deutschlands neue Armuts-Vegetarier",      
    },
    {
      type: "love-change", // text, multiple-choice
      background: "biertisch", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      love: -7,
      text: "Wenn es um die Wurst geht, verstehen die Deutschen keinen Spaß!",      
    },
  ]
},


{
  id: "tiere-nicht-umgesetzt",
  condition: "tick > 500 && !done.includes('tiere')",
  slides: [
    {
      type: "text", // text, multiple-choice
      background: "buero", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      text: "Ihr Koalitionspartner hat in einem Interview Massentierhaltung thematisiert.",      
      position: "top",
    },
    {
      type: "text", // text, multiple-choice
      background: "talkshow", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      text: "Bei Anne Will werden Sie darauf angesprochen",      
      position: "top",
    },
    {
      type: "multiple-choice", // text, multiple-choice
      background: "talkshow", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      text: "KÖNNEN WIR UNS BILLIGFLEISCH NOCH LEISTEN?",      
      answers: [
        {
          text: "Keine Sorge. Das Kotelett ist ein Menschenrecht!",
          slides: [
            {
              type: "love-change",
              love: 10,
              background: "talkshow",
              text: "Lecker, Kotelett!"
            }
          ]
        },
        {
          text: "Nein, denn den Preis bezahlen am Ende wir alle.",
          slides: [
            {
              type: "love-change",
              love: -10,
              background: "talkshow",
              text: "Wir lassen uns doch nicht von euch Gutmenschen nicht die Wurst vom Grill nehmen!"
            }
          ]
        }
      ]
    },
  
  ]
},




{
  id: "co2-lobbyreaktion",
  condition: "started.includes('co2bepreisung')",
  slides: [
    {
      type: "text", // text, multiple-choice, love-change, temperature-change
      background: "buero", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "",
      text: "Leider bezahlen wir sofort den Preis für den CO2-Preis: Die Industrielobby hat uns das übelgenommen und macht Stimmung gegen uns.",
      position: "top",
    },
    {
      type: "love-change",
      love: -12,
      background: "buero",
      text: "Angst vor Arbeitsplatzverlusten. Angst vor höheren Preisen. Angst vor Inflation. Angst vor der Angst. Die Thinktanks der Lobbys schießen aus allen Rohren. Die Stimmung im Land ist angespannt."
    }
  ]
},


{
  id: "follow-up-co2",
  condition: "done.includes('co2bepreisung')",
  slides: [
    {
      type: "text", // text, multiple-choice, love-change, temperature-change
      background: "parlament", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "",
      text: "Glückwunsch! Die CO2-Bepreisung wurde mit einer knappen Mehrheit im Bundestag beschlossen.",
      position: "top",
    },
    {
      type: "news", // text, multiple-choice, love-change, temperature-change
      background: "zeitung", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "CO2 KOSTET JETZT. ABER NICHT MEHR DIE WELT.",
      text: "Warum sich die neue CO2-Bepreisung auch für Unternehmen rechnen wird.",
      position: "top",
    },
    {
      type: "multiple-choice", // text, multiple-choice, love-change, temperature-change
      background: "interview", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "",
      text: "„Eine Frage: Was habven Sie mit den Milliarden-Einnahmen aus der CO2-Besteuerung vor?“",
      position: "top",
      answers: [
        {
          text: "Blühende Landschaften",
          slides: [
            {
              type: "love-change",
              love: 5,
              background: "interview"
            }
          ]
        },
        {
          text: "Blühende Seilschaften",
          slides: [
            {
              type: "love-change",
              love: -5,
              background: "interview"
            }
          ]
        }
      ]
    },
  ]
},



{
  id: "eautos-gestartet",
  condition: "started.includes('eautos')",
  slides: [
    {
      type: "news", // text, multiple-choice, love-change, temperature-change
      background: "zeitung", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "SCHAFFEN WIR E?",
      text: "Warum der Motor der Deutschen Wirtschaft ein Verbrennungsmotor ist.",
    },
    {
      type: "love-change",
      love: -7,
      background: "zeitung",
      text: "Droht ohne Verbrenner-Autos der wirtschaftliche Kollaps? Es kursieren wilde Mythen und Ängste. Ihre Beliebtheit leidete."
    }
  ]
},



{
  id: "eautos-follow-up-ohne-zug",
  condition: "done.includes('eautos') && !done.includes('zuege')",
  slides: [
    {
      type: "text", // text, multiple-choice, love-change, temperature-change
      background: "buero", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "",
      text: "Sie haben den Verbrennungsmotor abgeschafft, aber nicht in Züge investiert!",
      position: "bottom",
    },
    {
      type: "news",
      background: "zeitung",
      title: "WIE DIE BUNDESREGIERUNG DEUTSCHLAND IN DEN STILLSTAND FÜHRT",
      text: "Keine Autos, keine Züge, kein Fortkommen"
    }
  ]
},


{
  id: "eautos-follow-up-erfolg",
  condition: "done.includes('eautos') && done.includes('zuege')",
  slides: [
    {
      type: "news", // text, multiple-choice, love-change, temperature-change
      background: "zeitung", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "ES ROLLT NICHT NUR, ES LÄUFT SOGAR",
      text: "3,2 Millionen Jobs dank Elektroautos",
    },
    {
      type: "love-change",
      love: 12,
      background: "zeitung",
      text: "Das Autoland ist stolz seine E-Revolution"
    }
  ]
},



{
  id: "techn-loesung1",
  condition: "tick == 228",
  slides: [
    {
      type: "text", // text, multiple-choice, love-change, temperature-change
      background: "kaminzimmer", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "",
      text: "Bei einem Kaminzimmer-Gespräch kommt ein Lobbyvertreter der Industrie auf Sie zu...",
      position: "top",
    },
    {
      type: "multiple-choice", // text, multiple-choice, love-change, temperature-change
      background: "kaminzimmer", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "",
      text: "„Wenn Sie wollen, retten wir das Klima mit der Innovationskraft deutscher Ingenieurskunst – wenn Sie über die nächsten 5 Jahre 300 Milliarden investieren.“",
      position: "top",
      answers: [
        {
          text: "machen",
          variable: "techdealgemacht"
        },
        {
          text: "nicht machen"
        }
      ]
    },
  ]
},


{
  id: "techn-loesung2",
  condition: "tick == 252 && !vars.techdealgemacht",
  slides: [
    {
      type: "text", // text, multiple-choice, love-change, temperature-change
      background: "berater", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "",
      text: "Ich bin mir sicher: Die Lösung für's Klima wird eine technologische sein. Wir sollten jetzt wirklich 300 Milliarden in CO2-Staubsauger und Co investieren.",
      position: "bottom",
    },
    {
      type: "multiple-choice", // text, multiple-choice, love-change, temperature-change
      background: "berater", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "",
      text: "300 Milliarden für CO2-Staubsauger ausgeben?",
      position: "top",
      answers: [
        {
          text: "Ja, Berater vertrauen",
          variable: "techdealgemacht",
        },
        {
          text: "Nein, nicht auf ihn hören"
        }
      ]
    },
  ]
},


{

  id: "techdeal-gemacht",
  condition: "vars.techdealgemacht",
  slides: [
    {
      type: "news",
      background: "zeitung",
      title: "DER HANDSCHLAG FÜRS KLIMA",
      text: "Alles auf eine Karte: Bundesregierung setzt beim Klimawandel auf die Innovationskraft deutscher Unternehmen."
    },
    {
      type: "temperature-change",
      background: "biertisch",
      temperature: 0.1,
      text: "Die Bevölkerung verlässt sich in Sachen Klimawandel jetzt – genau wie Sie – auf die technischen Lösungen der Industrie... und achtet noch weniger selbst auf's Klima. Die Erwärmung steigt."
    }

  ]

},


{
  id: "techdeal-opposition",
  condition: "vars.techdealgemacht && tick == 528",
  slides: [
    {
      type: "text", // text, multiple-choice, love-change, temperature-change
      background: "parlament", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "",
      text: "Bei der Regierungsbefragung im Bundestag richtet die Opposition eine Frage direkt an Sie.",
      position: "top",
    },
    {
      type: "text", // text, multiple-choice, love-change, temperature-change
      background: "parlament", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "",
      text: "„Vor 5 Jahren haben Sie 300 Milliarden Euro in s.g. CO2-Staubsauger investiert. Bis heute läuft davon kein einziger...“",
      position: "bottom",
    },
    {
      type: "text", // text, multiple-choice, love-change, temperature-change
      background: "parlament", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "",
      text: "„Liebe Bundesregierung, Sie haben Sich von der Industrie veräppeln lassen!“",
      position: "bottom",
    },
    {
      type: "love-change", // text, multiple-choice, love-change, temperature-change
      background: "parlament", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      love: -6,
      text: "Wer das Klima retten will, sollte wohl lieber die Klimasünder besteuern anstatt ihnen Geldgeschenke zu machen...",
    },
  ]
},


{
  id: "umfragewerte-im-keller",
  condition: "love < 35",
  slides: [
    {
      type: "text", // text, multiple-choice, love-change, temperature-change
      background: "berater", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "",
      text: "Ihre Umfragewerte sind irgendwie im Keller...",
      position: "bottom",
    },
    {
      type: "multiple-choice", // text, multiple-choice, love-change, temperature-change
      background: "berater", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "",
      text: "Was wollen Sie tun?",
      position: "bottom",
      answers: [
        {
          text: "Ab zu Anne Will",
          slides: [
            {
              type: "love-change",
              love: 1,
              silent: true
            }
          ]
        },
        {
          text: "Die Flotte der Bundesregierung endlich auf E-Autos umstellen",
          slides: [
            {
              type: "love-change",
              love: 3,
              silent: true
            }
          ]
        }
      ]
    },
  ]
},


// {
//   id: "sosehensiegeraus",
//   condition: "tick == 40",
//   slides: [
//     {
//       type: "love-change", // text, multiple-choice, love-change, temperature-change
//       background: "biertisch", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
//       love: 5,
//       text: "Sie haben Glück: Deutschland wird Weltmeister und die gute Laune wirkt sich positiv auf ihre Umfragewerte aus."
//     }
//   ]
// },



/*
{
  id: "",
  condition: "",
  slides: [
    {
      type: "news", // text, multiple-choice, love-change, temperature-change
      background: "zeitung", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      title: "",
      text: "",
      position: "bottom",
    },
  ]
},
*/







    ],
  },
});

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./reducers.js", () => store.replaceReducer(rootReducer));
}

// For debugging conditional events:

window.store = store;

window.tick = (value) => {
  return window.store.dispatch({ type: "clock/tick", data: value });
};

window.love = (value) => {
  return window.store.dispatch({ type: "love/set", data: value });
};

window.temp = (value) => {
  return window.store.dispatch({ type: "temperature/set", data: value });
};

window.action = (value) => {
  return window.store.dispatch({
    type: "action/end",
    data: { id: "" + value },
  });
};

window.vars = () => {
  return Object.keys(window.store.getState().vars);
};

window.play = () => {
  return window.store.dispatch({ type: "clock/start" });
};

window.pause = () => {
  return window.store.dispatch({ type: "clock/stop" });
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
