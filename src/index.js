import React from "react";
import {render} from "react-dom";

import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

import rootReducer from "./reducers.js";

import App from "./components/App.js";

const duration = {
  short: 40,
  medium: 80,
  long: 300,
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
          "Beim Zertifikatehandel muss für jede ausgestoßene Tonne CO2 ein Zertifikat ersteigert werden, Verschmutzungsrechte sozusagen. <br /><br /> Aus Klimaschutzperspektive ist der CO2-Preis eigentlich ein geniales Instrument, weil fast alle Emissionsquellen – vom Industriekraftwerk bis zum Lkw - erfasst werden könnten. Mit der Anzahl der ausgegebenen Zertifikate kann die Gesamt-Emissionsmenge begrenzt werden kann, die jährlich ausgestoßen werden darf. Die Zertifikate können schrittweise aus dem Verkehr gezogen werden, so dass wir klimaneutral werden, ohne unser Restbudget zur Erreichung des 1,5-Grad-Ziels zu überschreiten. Durch die Knappheit der Zertifikate erhöht sich der ihr Preis automatisch – und damit der Anreiz auf klimaneutrale Technologien umzusteigen.",
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
          "Durch den Aufbau einer Kreislaufwirtschaft werden bestehende Materialien und Produkte so lange wie möglich in Benutzung gehalten. Das geschieht im Wesentlichen durch Wiederverwendung, Reparatur und Recycling. Dadurch werden Emissionen eingespart, die ansonsten für die energieaufwändige Produktion von Primärmaterialien anfallen würden.<br /><br />Fangen Sie rechtzeitig an! Diese Maßnahme umzusetzen dauert länger als eine Wahlperiode.",
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
          "95 % der Moore in Deutschland wurden trockegelegt, aber nur nasse Moore speichern CO2 - also: Moore nass machen! <br /><br />Fangen Sie rechtzeitig an! Diese Maßnahme umzusetzen dauert länger als eine Wahlperiode.",
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
          "Es werden nur noch so viele Tiere gehalten, wie das Land ernähren kann und ein Emissionshandel für tierische Produkte eingeführt: Etwa zwei Drittel der Emissionen des Landwirtschaftsbereichs stammen direkt aus der Tierhaltung. Durch einen Emissionshandel für tierische Produkte könnten diese Emissionen durch eine schrittweise Reduktion der Zertifikatsmenge zielgenau und kosteneffizient gesenkt werden. <br /><br />Politisch wird das eine Herausforderung. Achten Sie auf das Timing und Ihre öffentlichen Aussagen!",
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
          "Elektro- statt Verbrennungsmotoren: Deutlich weniger Emissionen und Wirtschaftsfaktor E-Mobilität. <br /><br />Die Deutschen hängen an ihrem Verbrenner. Sorgen Sie dafür, dass dieses Thema nicht zum Wahlkampfthema wird, denn hier können wir kurzfristig nur verlieren. Außerdem braucht es Alternativen für Pendler*innen.",
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
          "Noch ist der Zug nicht abgefahren – aber der Deutschlandtakt ist nur dann flächendeckend realisierbar, wenn verbindlich festgelegt wird, dass Fernverkehr auch dort stattfindet, wo wir ihn brauchen und nicht nur dort, wo er betriebswirtschaftlich rentabel ist.",
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
          "Ohne Kohleausstieg keine Klimawende. Wir müssen unsere Energieerzeugung grundlegend transformieren. <br /><br />Politisch wird das nicht ganz leicht. Fangen Sie trotzdem vor 2028 an, sonst wird das mit dem Klimaziel nichts. Und schaffen Sie rechtzeitig Strom-Alternativen!",
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
          "Strom als Energieträger der Zukunft wird in zwei komplementären Bereichen erzeugt.<br /><br />Lokale Energiegemeinschaften: <br />Eine dezentrale Energieerzeugung bietet gegenüber einer zentralen die Vorteile, dass sie für eine Stabilität des Netzes sorgt, lange Transportwege vermeidet sowie die Teilhabe und damit auch Akzeptanz unter Bürger:innnen erhöht<br /><br />Regionale  EE-Kraftwerke:<br />Der erforderliche Zubau von erneuerbaren Energien kann nicht von Bürger- und Industriequartieren allein bewältigt werden. Insbesondere für den hohen Energiebedarf der Industrie werden regionale „Kraftwerke“ großer Solar- und Windenergieanlagen benötigt, die große Mengen Strom erzeugen und die unabhängig agierenden und sich entfaltenden Energiegemeinschaften ergänzen.",
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
          "Gebäude sanieren statt abreißen, Umbau vereinfachen statt neubauen. Hürden für Nutzungsänderungen und Umbauten im Bauordnungsrecht werden abgebaut. Um bis 2035 im Gebäudesektor klimaneutral zu werden, müssen wir den hohen Energieverbrauch durch die Gebäude (30% des Gesamtenergieverbrauchs in Deutschland) reduzieren, indem wir sie besser dämmen.",
        duration: duration.medium,
        temperature: -0.328125,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "stromsteuer",
        title: "Stromsteuer senken",
        sector: "social",
        description:
          "Strom aus Erneuerbaren Energien wird faktisch nicht mehr besteuert!<br /><br />Die Energiesteuer besteuert die Stromerzeugung in Abhängigkeit der CO2-Emission des jeweils verwendeten Brennstoffs. Strom der bspw. aus Kohle gewonnen wird, wird auf Grund hoher CO2-Emissionen teurer. Beziehen Verbraucher:innen ihren Strom jedoch aus erneuerbaren Energien, wird kein CO2 bei der Stromherstellung emittiert. Dieser Strom wird folglich nur mit dem europäischen Mindestsatz besteuert, der bei fast 0% liegt.",
        duration: duration.medium,
        temperature: 0,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "bge",
        title: "Bedingungsloses Grundeinkommen",
        sector: "social",
        description:
          "Durch das bedingungslose Grundeinkommen wird eine materielle Grundlage für alle geschaffen und damit Mut zum Wandel in der Gesellschaft gefördert. Ist für die Grundbedürfnisse gesorgt, können sich Menschen auf die notwendigen ökologischen Umstrukturierungen einlassen. <br /><br />Fangen Sie rechtzeitig an! Diese Maßnahme umzusetzen dauert länger als eine Wahlperiode.",
        duration: duration.long,
        temperature: 0,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "freeride",
        title: "Kostenloser öffentl. Nahverkehr",
        sector: "social",
        description:
          "Busse, Fähren, Straßenbahnen, Kleinbusse bringen die Bürger*innen der Kommunen ab sofort umsonst und klimafreundlich von A nach B!",
        duration: duration.medium,
        temperature: 0,
        state: "available",
        activeSinceTick: null,
      },
      {
        id: "flyingtax",
        title: "Vielfliegerabgabe",
        sector: "social",
        description:
          "Die Luftverkehrssteuer wird in eine Vielflieger*innenabgabe verwandelt – wer viel fliegt, muss auch viel zahlen – das trifft allerdings nur die 8% der Deutschen, die mehr als zwei Mal pro Jahr fliegen. In der Regel Menschen mit hohem Einkommen.",
        duration: duration.short,
        temperature: 0.1,
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
        condition: "temperature <= 1.5",
        slides: [
          {
            type: "game-over",
            text: "Sie haben das Klima gerettet! Was für eine beeindruckende Klima-Kanzlerschaft!",
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
            text: "Sie sind zwar im Amt geblieben aber haben das Klimaziel verfehlt!",
            background: "buero",
          },
        ],
      },


      {
        // Wahl 2025 verloren
        id: "vote-lost-2025",
        condition: "tick == 194 && love < 35",
        slides: [
          {
            type: "vote",
            text:
              "Bundestagswahl 2025: Reicht es für Ihre zweite Amtszeit?",
            background: "wahl",
            // Gewichtung der anderen Balken
            others: [1, 1.5, 2, 0.2],
          },
          {
            type: "game-over",
            text: "Für eine Wiederwahl hat Ihre Beliebheit leider nicht gereicht! Nochmal spielen?",
            background: "interview",
          },
        ],
      },


      {
        // Wahl 2025 gewonnen
        id: "vote-won-2025",
        condition: "tick == 194 && love >= 35",
        slides: [
          {
            type: "vote",
            text:
              "Bundestagswahl 2025: Reicht es für Ihre zweite Amtszeit?",
            background: "wahl",
            // Gewichtung der anderen Balken
            others: [1, 1.5, 2, 0.2],
          },
          {
            type: "text",
            text: "Wahlsieg! Sie bleiben 4 weitere Jahre im Amt.",
            background: "jubel",
          },
        ],
      },



      {
        // Wahl 2029 verloren
        id: "vote-lost-2029",
        condition: "tick == 388 && love < 35",
        slides: [
          {
            type: "vote",
            text:
              "Bundestagswahl 2029: Wird das was mit der dritten Amtszeit?",
            background: "wahl",
            // Gewichtung der anderen Balken
            others: [1, 1.5, 2, 0.2],
          },
          {
            type: "game-over",
            text: "Diesmal hat es für eine Wiederwahl nicht gereicht. Nochmal spielen?",
            background: "interview",
          },
        ],
      },


      {
        // Wahl 2029 gewonnen
        id: "vote-won-2029",
        condition: "tick == 388 && love >= 35",
        slides: [
          {
            type: "vote",
            text:
              "Bundestagswahl 2029: Wird das was mit der dritten Amtszeit?",
            background: "wahl",
            // Gewichtung der anderen Balken
            others: [1, 1.5, 2, 0.2],
          },
          {
            type: "text",
            text: "Glückwunsch! Sie können mit dem 3. Kabinett weiter regieren.",
            background: "jubel",
          },
        ],
      },

      {
        // Wahl 2033 verloren
        id: "vote-lost-2033",
        condition: "tick == 582 && love < 35",
        slides: [
          {
            type: "vote",
            text:
              "Bundestagswahl 2033: Schaffen Sie es zum vierten Mal?",
            background: "wahl",
            // Gewichtung der anderen Balken
            others: [1, 1.5, 2, 0.2],
          },
          {
            type: "game-over",
            text: "Diesmal macht Ihnen das Wahlergebnis einen Strich durch die Rechnung. Nochmal spielen?",
            background: "interview",
          },
        ],
      },


      {
        // Wahl 2033 gewonnen
        id: "vote-won-2033",
        condition: "tick == 582 && love >= 35",
        slides: [
          {
            type: "vote",
            text:
              "Bundestagswahl 2033: Schaffen Sie es zum vierten Mal?",
            background: "wahl",
            // Gewichtung der anderen Balken
            others: [1, 1.5, 2, 0.2],
          },
          {
            type: "text",
            text: "Schon wieder gewonnen! Ab auf die Zielgerade für 2035.",
            background: "jubel",
          },
        ],
      },


      // SPIELTIPPS


      {
        // Berater fragt 1/2
        id: "berater1",
        condition: "tick == 1 && vars.replay2",
        slides: [
          {
            type: "multiple-choice",
            text: "Darf ich Ihnen ein paar Ratschläge geben, wie Sie gewinnen können?",
            background: "berater",
            answers: [
              {
                text: "Ja, bitte!",
                variable: "needhelp"
              },
              {
                text: "Nein, ich schaff das allein!",
              }
            ]
          }
        ],
      },
      {
        // Berater fragt 2/2
        id: "berater2",
        condition: "tick == 1 && vars.replay3",
        slides: [
          {
            type: "multiple-choice",
            text: "Jetzt ein paar Gewinn-Tipps?",
            background: "berater",
            answers: [
              {
                text: "Ja, okay.",
                variable: "needhelp"
              },
              {
                text: "Neeein.",
              }
            ]
          }
        ],
      },
      {
        // Spieltipps vom Berater
        id: "beraterspieltipps",
        condition: "vars.needhelp",
        slides: [
          {
            type: "text",
            text: "<b>Tipp 1 von 5:</b><br />Einige wichtige Maßnahme wie CO2-Bepreisung, das Beenden der Massentierhaltung und der Ausstieg aus dem Verbrennungsmotor sind bei der Lobby bzw. bei der Bevölkerung wenig beliebt. Achten Sie deshalb darauf, diese Maßnahmen nicht direkt vor der Wahl durchzuführen.",
            background: "berater",
          },
          {
            type: "text",
            text: "<b>Tipp 2 von 5:</b><br />Zu viel Veränderung beunruhigt die Leute – gleichzeitig ist sie nötig um den Planeten zu retten. Schaffen Sorgen Sie deshalb dafür, dass die Leute keine Angst haben, finanzielle Verlierer der Klimapolitik zu werden. Sie finden dafür in der Maßnahmenliste ganz unten den Punkt „Sozialer Ausgleich“.",
            background: "berater",
          },
          {
            type: "text",
            text: "<b>Tipp 3 von 5:</b><br />Wenn Ihnen der politische Betrieb zu hektisch wird, finden Sie unter dem Thermometer eine Pause-Knopf. Im Pause-Modus, können Sie sich in aller Ruhe in die Maßnahmen einlesen.",
            background: "berater",
          },
          {
            type: "text",
            text: "<b>Tipp 4 von 5:</b><br />Einige Maßnahmen dauern sehr lange in der Umsetzung – z.B. Moore und Kreislaufwirtschaft. Fangen Sie damit allerspätestens am Anfang der dritten Wahlperiode an, sonst erreichen Sie ihr Ziel nicht.",
            background: "berater",
          },
          {
            type: "text",
            text: "<b>Tipp 5 von 5:</b><br />Schaffen Sie klimafreundliche Alternativen bevor Sie Verbote durchsetzen. Setzen Sie rechtzeitig auf die Schiene und auf erneuerbare Energien.",
            background: "berater",
          },
        ],
      },





      // KLIMAFOLGEN ONLY


      {
        id: "folge-mehrwege",
        condition: "done.includes('mehrwege')",
        slides: [
          {
            type: "temperature-change",
            temperature: -0.4375,
            background: "buero",
            text: "Umstellung auf Kreislaufwirtschaft abgeschlossen! Die Ressourcen halten länger und deswegen hat uns die Rohstoffkrise nicht so hart getroffen."
          },
        ]
      },

      {
        id: "folge-moore",
        condition: "done.includes('moore')",
        slides: [
          {
            type: "temperature-change",
            temperature: -0.09375,
            silent: true
          },
        ]
      },


      {
        id: "folge-eautos",
        condition: "done.includes('eautos')",
        slides: [
          {
            type: "temperature-change",
            temperature: -0.21875,
            silent: true
          },
        ]
      },

      {
        id: "folge-zuege",
        condition: "done.includes('zuege')",
        slides: [
          {
            type: "temperature-change",
            temperature: -0.171875,
            silent: true
          },
          {
            type: "love-change",
            love: 8,
            background: "buero",
            text: "Die Züge fahren jetzt im ganzen Land zuverlässig und in hohem Takt – und im gleichen Zug steigt ihre Beliebtheit!"
          }
        ]
      },

      {
        id: "folge-solarwind",
        condition: "done.includes('solarwind')",
        slides: [
          {
            type: "temperature-change",
            temperature: -0.1875,
            silent: true
          },
        ]
      },

      {
        id: "folge-reparieren",
        condition: "done.includes('reparieren')",
        slides: [
          {
            type: "temperature-change",
            temperature: -0.328125,
            silent: true
          },
        ]
      },


      //////// FOLGEN DER AUSGLEICHMASSNAHMEN /////

      {
        id: "folge-stromsteuer",
        condition: "done.includes('stromsteuer')",
        slides: [
          {
            type: "love-change",
            love: 5,
            background: "buero",
            text: "Kohlestrom lohnt sich nicht! Die praktische Abschaffung der Steuer für Erneuerbare Energien war genau der richtige Anreiz für den Umbau! Strom wurde deutlich günstiger und mit den vollen Taschen steigt ihre Beliebtheit!"
          },
        ]
      },
      {
        id: "folge-flyingtax",
        condition: "done.includes('flyingtax')",
        slides: [
          {
            type: "temperature-change",
            temperature: -0.1,
            background: "biertisch",
            text: "Vielfliegersteuer eingeführt! Malle ist weiterhin gut besucht! Trotzdem geht der Trend zum Zug und das ist klasse fürs Klima!"
          },
          {
            type: "love-change",
            love: 2,
            background: "biertisch",
            text: "... und wird als gerecht empfunden! Beliebtheit steigt"
          },
        ]
      },
      {
        id: "folge-freeride",
        condition: "done.includes('freeride')",
        slides: [
          {
            type: "love-change",
            love: 5,
            background: "parlament",
            text: "Die Fahrgastzahlen schnellen in die Höhe! Weniger Stau, weniger Tanken, mehr Zeit - ihre Beliebtheit steigt im Takt der Busse!"
          },
        ]
      },
      {
        id: "folge-bge",
        condition: "done.includes('bge')",
        slides: [
          {
            type: "love-change",
            love: 12,
            background: "biertisch",
            text: "Die Leute lieben das Grundeinkommen – und deshalb auch Sie"
          },
          {
            type: "temperature-change",
            temperature: 0.1,
            background: "biertisch",
            text: "Durch Bedingungslose Grundeinkommen sinkt der Stress in der Gesellschaft. Weniger Stress führt zu weniger kurzfristigem Konsum. Das ist gut für's Klima!"
          },
        ]
      },


      //////// STORIES ///////////




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
                    newsId: 8,
                    title: "KEINE KOHLE.",
                    text: "Können wir uns Strom bald nicht mehr leisten?",
                    background: "zeitung"
                  },
                  {
                    type: "love-change",
                    love: -3,
                    background: "zeitung"
                  }
                ]
              },
              {
                text: "Der Kohleausstieg ist ein so heißes Thema. Da warte ich lieber noch.",
                slides: [
                  {
                    type: "news",
                    newsId: 7,
                    title: "VERPSPROCHEN: GEBROCHEN.",
                    text: "Regierung schiebt Zukunft auf die lange Bank.",
                    background: "zeitung"
                  },
                  {
                    type: "love-change",
                    love: -2,
                    background: "zeitung"
                  }

                ]
              }
            ]
          }

        ]


      },



      {
        id: "follow-up-kohle",
        condition: "done.includes('kohleausstieg')",
        slides: [
          {
            type: "temperature-change",
            temperature: -0.1875,
            background: "buero",
            text: "Mit dem Kohleausstieg haben Sie den Klimakiller Nummer 1 gekillt!"
          },
          {
            type: "text",
            background: "parlament",
            text: "Die Opposition fabuliert von Stromausfällen. Stimmt zwar nicht..."
          },
          {
            type: "love-change",
            love: -2,
            background: "parlament",
            text: "...kostet uns aber trotzdem Beliebtheit."
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
            text: "In der Debatte zur Abschaffung der Massentierhaltung geht es heiß her.",
            position: "bottom",
          },
          {
            type: "news", // text, multiple-choice
            newsId: 6,
            background: "zeitung", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            title: "WARUM DER PREIS NICHT WURST IST!",
            text: "Deutschlands neue Armuts-Vegetarier.",
          },
          {
            type: "love-change", // text, multiple-choice
            background: "biertisch", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            love: -4,
            text: "Null Bockwurst: Beim Fleischpreis verstehen die Deutschen keinen Spaß.",
          },
          {
            type: "temperature-change", // text, multiple-choice
            background: "buero", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            temperature: -0.09375,
            text: "Trotzdem gut fürs Klima: Die Temperatur sinkt.",
          }
        ]
      },


      {
        id: "tiere-nicht-umgesetzt",
        condition: "tick > 500 && !done.includes('tiere')",
        slides: [
          {
            type: "text", // text, multiple-choice
            background: "buero", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            text: "Ihr treuloser Koalitionspartner hat in einem Interview Massentierhaltung thematisiert.",
            position: "top",
          },
          {
            type: "text", // text, multiple-choice
            background: "talkshow", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            text: "Bei Anne Will kommt das Thema zur Sprache.",
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
                    love: 5,
                    background: "talkshow",
                    text: "Richtig so! Ab auf den Grill mit dem Klimageschwätz!"
                  }
                ]
              },
              {
                text: "Nein, denn den Preis bezahlen am Ende wir alle.",
                slides: [
                  {
                    type: "love-change",
                    love: -5,
                    background: "talkshow",
                    text: "„Ich verspreche Ihnen: Mit Ihrer Tofu-Politik kommen Sie in unserer Bratwurst-Nation nicht weit!“"
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
            text: "Leider bezahlen wir sofort den politischen Preis für den CO2-Preis.",
            position: "top",
          },
          {
            type: "love-change",
            love: -8,
            background: "buero",
            text: "Arbeitsplatzverluste, Preisanstiege, Inflation: Unsere politischen Gegner lassen nichts unversucht, um uns zu schaden. Die Stimmung im Land ist angespannt."
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
            type: "temperature-change",
            background: "parlament",
            temperature: -0.78125,
            text: "Ein großer Schritt! Keine Maßnahme senkt den CO2-Ausstoß so stark, wie ein vernünftiger Emissionshandel."
          },
          {
            type: "news", // text, multiple-choice, love-change, temperature-change
            newsId: 5,
            background: "zeitung", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            title: "ENDLICH BEZAHLT FÜRS CO2 NICHT MEHR DIE UMWELT.",
            text: "Warum die neue CO2-Bepreisung gut für Klima und Unternehmen ist.",
            position: "top",
          },
          {
            type: "multiple-choice", // text, multiple-choice, love-change, temperature-change
            background: "interview", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            title: "",
            text: "„Eine Frage: Was haben Sie mit den Milliarden-Einnahmen aus der CO2-Besteuerung vor?“",
            position: "top",
            answers: [
              {
                text: "Sparen für die Schwarze Null",
                slides: [
                  {
                    type: "love-change",
                    love: -5,
                    background: "interview"
                  }
                ]
              },
              {
                text: "An Bürger*innen auszahlen",
                slides: [
                  {
                    type: "love-change",
                    love: 8,
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
            newsId: 4,
            background: "zeitung", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            title: "SCHAFFEN WIR E?",
            text: "Warum der Motor der Deutschen Wirtschaft  ein Benziner ist.",
          },
          {
            type: "love-change",
            love: -7,
            background: "zeitung",
            text: "Droht ohne Verbrenner-Autos der wirtschaftliche Kollaps? Es kursieren wilde Mythen und Ängste. Ihre Beliebtheit leidet."
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
            newsId: 3,
            background: "zeitung",
            title: "WIE DIE BUNDESREGIERUNG DEUTSCHLAND IN DEN STILLSTAND FÜHRT",
            text: "Keine Autos, keine Züge, kein Fortkommen."
          },
          {
            type: "love-change",
            background: "buero",
            love: -10,
            text: "Sie sollten schnell die Moblitätfrage lösen!"
          }
        ]
      },


      {
        id: "eautos-follow-up-erfolg",
        condition: "done.includes('eautos') && done.includes('zuege')",
        slides: [
          {
            type: "news", // text, multiple-choice, love-change, temperature-change
            newsId: 2,
            background: "zeitung", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            title: "ES ROLLT NICHT NUR, ES LÄUFT SOGAR.",
            text: "3,2 Millionen Jobs dank Elektroautos.",
          },
          {
            type: "love-change",
            love: 12,
            background: "zeitung",
            text: "Das Autoland ist stolz auf seine E-Revolution"
          }
        ]
      },


      {
        id: "eautos-follow-up-synth",
        condition: "done.includes('eautos')",
        slides: [
          {
            type: "multiple-choice", // text, multiple-choice, love-change, temperature-change
            background: "kaminzimmer", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            text: "Der Wirtschaftsflügel ihrer Partei drängt darauf, synthetische Kraftstoffe auf die Agenda setzen.",
            answers: [
              {
                text: "machen",
                slides: [
                  {
                    type: "love-change",
                    love: 3,
                    background: "kaminzimmer",
                    text: "Das kommt gut an"
                  },
                  {
                    type: "temperature-change",
                    temperature: 0.2,
                    background: "kaminzimmer",
                    text: "Ist aber aus Klimasicht totaler Quatsch. Die Herstellung der Brennstoffe kostet viel zu viel Energie."
                  }
                ]
              },
              {
                text: "nicht machen",
                slides: [
                  {
                    type: "text",
                    background: "berater",
                    text: "Gut, dass Sie das abgeleht haben. Die Herstellung der synthetischen Brennstoffe kostet viel zu viel Energie."
                  }
                ]
              }
            ]
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
            text: "Bei einem Kaminzimmer-Gespräch kommt ein Lobbyvertreter der Industrie auf Sie zu ...",
            position: "top",
          },
          {
            type: "multiple-choice", // text, multiple-choice, love-change, temperature-change
            background: "kaminzimmer", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            title: "",
            text: "„Das Mittel gegen den Klimawandel ist die Innovationskraft der deutschen Ingenieurskunst. Alles, was es dazu braucht: ein 300-Milliarden-Investitionspaket über die nächsten 5 Jahre.“",
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
            text: "Ich bin mir sicher: Die Lösung fürs Klima wird eine technologische sein. Wir sollten jetzt wirklich 300 Milliarden in CO2-Staubsauger und Co investieren.",
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
            newsId: 1,
            title: "DER HANDSCHLAG FÜRS KLIMA",
            text: "Alles auf eine Karte: Bundesregierung setzt beim Klimawandel auf die Innovationskraft deutscher Unternehmen."
          },
          {
            type: "temperature-change",
            background: "biertisch",
            temperature: 0.1,
            text: "Die Bevölkerung macht es Ihnen nach: Statt selbst aufs Klima zu achten, wartet sie auf die Klimarettung durch Technologie. Die Erwärmung steigt."
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
            text: "„Vor 5 Jahren haben Sie 300 Milliarden Euro in diese CO2-Staubsauger investiert. Bis heute läuft davon kein einziger ...“",
            position: "bottom",
          },
          {
            type: "text", // text, multiple-choice, love-change, temperature-change
            background: "parlament", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            title: "",
            text: "„Liebe Bundesregierung, Sie haben sich von der Industrie veräppeln lassen!“",
            position: "bottom",
          },
          {
            type: "love-change", // text, multiple-choice, love-change, temperature-change
            background: "parlament", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            love: -6,
            text: "Wer das Klima retten will, sollte wohl lieber die Klimasünder besteuern anstatt ihnen Geldgeschenke zu machen ...",
          },
          {
            type: "temperature-change", // text, multiple-choice, love-change, temperature-change
            background: "berater", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            temperature: -0.1,
            text: "Die Opposition hat etwas übertrieben. Mit technischen Lösungen werden wir zwar nie unser Ziel erreichen, aber immerhin haben sie 0,1° Verbesserung gebracht.",
          },
        ]
      },


      {
        id: "umfragewerte-im-keller",
        condition: "love < 35 && ( (tick > 150 && tick < 192) || (tick > 334 && tick < 384) || (tick > 526 && tick < 576) )",
        slides: [
          {
            type: "text", // text, multiple-choice, love-change, temperature-change
            background: "berater", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            title: "",
            text: "Ihre Umfragewerte sind irgendwie im Keller ...",
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
                    love: -2,
                    background: "talkshow",
                    text: "Sie haben die anderen Diskussionsteilnehmer*innen nie ausreden lassen – Ihre Beliebtheit sinkt!"
                  }
                ]
              },
              {
                text: "Die Flotte der Bundesregierung endlich auf E-Autos umstellen.",
                slides: [
                  {
                    type: "love-change",
                    love: 4,
                    background: "berater",
                    text: "Wow! Sie haben einen echten Dominoeffekt ausgelöst, die öffentliche Hand verpflichtet sich jetzt auch dazu, dass Krankenhausessen klimaverträglich wird!"
                  }
                ]
              }
            ]
          },
        ]
      },


      {
        id: "sosehensiegeraus",
        condition: "tick == 424",
        slides: [
          {
            type: "love-change", // text, multiple-choice, love-change, temperature-change
            background: "biertisch", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            love: 5,
            text: "Sie haben Glück: Deutschland wird Fußball-Weltmeister 2030 und die gute Laune wirkt sich positiv auf ihre Umfragewerte aus."
          }
        ]
      },


      // {
      //   id: "populisten",
      //   condition: "love < 40 && tick > 400 && temperature < 3",
      //   slides: [
      //     {
      //       type: "temperature-change", // text, multiple-choice, love-change, temperature-change
      //       background: "berater", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      //       temperature: 0,
      //       text: "Nur noch wenige Grad Celsius bis zum Ziel: Sie haben dieses Land schon sehr verändert!"
      //     },
      //     {
      //       type: "text", // text, multiple-choice, love-change, temperature-change
      //       background: "parlament", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      //       text: "Leider haben bei so viel Veränderung die Populisten Aufwind."
      //     },
      //     {
      //       type: "multiple-choice", // text, multiple-choice, love-change, temperature-change
      //       background: "buero", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
      //       text: "Was wollen Sie gegen die Populisten tun?",
      //       answers: [
      //         {
      //           text: "Bedingungsloses Grundeinkommen auf den Weg bringen",
      //           slides: [
      //             {
      //               type: "love-change",
      //               background: "biertisch",
      //               love: 15,
      //               text: "Grundeinkommen stiftet Vertrauen – auch in Ihre Politik",
      //               position: "top"
      //             }
      //           ]

      //         },
      //         {
      //           text: "Mit Populisten zusammenarbeiten",
      //           slides: [
      //             {
      //               type: "love-change",
      //               background: "talkshow",
      //               love: -15,
      //               text: "Zu ihren politischen Freunden zählen Sie auch Demokratiefeinde. Wie erklären Sie das Ihren Wähler*innen?",
      //               position: "top"
      //             }
      //           ]
      //         }
      //       ]
      //     },
      //   ]
      // },

      {
        id: "erneuerbare-reminder",
        condition: "tick == 176 && !(done.includes('solarwind') || started.includes('solarwind'))",
        slides: [
          {
            type: "text", // text, multiple-choice, love-change, temperature-change
            background: "berater", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            title: "",
            text: "Also die Erneuerbaren sollten wir jetzt bald mal volle Power ausbauen.",
            position: "bottom",
          },
          {
            type: "multiple-choice", // text, multiple-choice, love-change, temperature-change
            background: "berater", //talkshow, jubel, yellow, buero, biertisch, interview, parlament, kaminzimmer, berater
            title: "",
            text: "Wollen Sie Sonne und Windkraft?",
            position: "bottom",
            answers: [
              {
                text: "Ich schau mir das mal an."
              },
              {
                text: "Ich steh schon genug unter Strom."
              }
            ]
          }
        ]
      },


    ],
  },
});

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./reducers.js", () => store.replaceReducer(rootReducer));
}

// For debugging conditional events:

window.store = store;

window.tick = (value) => {
  return window.store.dispatch({type: "clock/tick", data: value});
};

window.love = (value) => {
  return window.store.dispatch({type: "love/set", data: value});
};

window.temp = (value) => {
  return window.store.dispatch({type: "temperature/set", data: value});
};

window.action = (value) => {
  return window.store.dispatch({
    type: "action/end",
    data: {id: "" + value},
  });
};

window.vars = () => {
  return Object.keys(window.store.getState().vars);
};

window.play = () => {
  return window.store.dispatch({type: "clock/start"});
};

window.pause = () => {
  return window.store.dispatch({type: "clock/stop"});
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
