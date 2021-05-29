function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case "game/start":
      return {
        ...state,
        game: {
          ...state.game,
          started: true,
        },
      };
    case "game/stop":
      return {
        ...state,
        game: {
          ...state.game,
          started: false,
          stopped: true,
        },
      };
    case "game/introStep":
      return {
        ...state,
        game: {
          ...state.game,
          introStep: action.data,
        },
      };
    case "clock/start":
      return {
        ...state,
        clock: {
          ...state.clock,
          stack: state.clock.stack - 1,
          isRunning: state.clock.stack === 1,
        },
      };
    case "clock/stop":
      return {
        ...state,
        clock: {
          ...state.clock,
          stack: state.clock.stack + 1,
          isRunning: false,
        },
      };
    case "clock/fast":
      return {
        ...state,
        clock: {
          ...state.clock,
          isFast: true,
        },
      };
    case "clock/normal":
      return {
        ...state,
        clock: {
          ...state.clock,
          isFast: false,
        },
      };
    case "clock/tick":
      const tick = state.clock.tick + 1;
      return {
        ...state,
        records: [
          ...state.records,
          {
            temperature: state.temperature.current,
            love: state.love,
          },
        ],
        clock: {
          ...state.clock,
          tick,
        },
      };
    case "conditionalEvent/destroy":
      return {
        ...state,
        conditionalEvents: [...state.conditionalEvents.filter(ce => ce.id !== action.data)],
      };
    case "conditionalEvent/nextSlide":
      return {
        ...state,
        conditionalEvents: state.conditionalEvents.map((ce) =>
          ce.id === action.data.id
            ? {...ce, slide: (ce.slide || 1) + 1}
            : ce
        )
      };
    case "conditionalEvent/addSlides":
      return {
        ...state,
        conditionalEvents: state.conditionalEvents.map((ce) =>
          ce.id === action.data.id
            ? {...ce, slides: ce.slides.concat(action.data.slides)}
            : ce
        )
      };
    case "conditionalEvent/setVariable":
      const vars = {...state.vars};
      vars[action.data.variable] = true;
      return {
        ...state,
        vars,
      };
    case "temperature/increase":
      const currentTemp = state.temperature.current + action.data;
      return {
        ...state,
        temperature: {
          ...state.temperature,
          current: currentTemp,
        },
      };
    case "temperature/decrease":
      const current = state.temperature.current - action.data;
      return {
        ...state,
        temperature: {
          ...state.temperature,
          current,
        },
      };
    case "love/change":
      const newLove = state.love + action.data;
      return {
        ...state,
        love: newLove > 100 ? 100 : newLove < 0 ? 0 : newLove,
      };
    case "action/show":
      return {
        ...state,
        actions: state.actions.map((a) =>
          a.id === action.data
            ? {...a, detailViewActive: true}
            : a
        ),
      };
    case "action/hide":
      return {
        ...state,
        actions: state.actions.map((a) =>
          a.id === action.data
            ? {...a, detailViewActive: false}
            : a
        ),
      };
    case "action/activate":
      return {
        ...state,
        actions: state.actions.map((a) =>
          a.id === action.data.id
            ? {...a, state: "active", activeSinceTick: state.clock.tick}
            : a
        ),
      };
    case "action/end":
      return {
        ...state,
        actions: state.actions.map((a) =>
          a.id === action.data.id ? {...a, state: "ended"} : a
        ),
      };
    case "actions/show":
      return {
        ...state,
        actionsVisibleStack: state.actionsVisibleStack - 1,
        actionsVisible: state.actionsVisibleStack === 1,
      };
    case "actions/hide":
      return {
        ...state,
        actionsVisibleStack: state.actionsVisibleStack + 1,
        actionsVisible: false,
      };
    case "actionPartitions/change":
      const partitions = [
        action.data,
        ...state.actionPartitions.filter((p) => p !== action.data),
      ];
      return {
        ...state,
        actions: [
          ...state.actions.filter((a) => a.state === partitions[0]),
          ...state.actions.filter((a) => a.state === partitions[1]),
          ...state.actions.filter((a) => a.state === partitions[2]),
        ],
        actionPartitions: partitions,
      };
    case "actionsSortBy/change":
      const sortBy = (a, b) => {
        if (a[action.data] < b[action.data]) {
          return state.actionsSortOrder === "asc" ? -1 : 1;
        }
        if (a[action.data] > b[action.data]) {
          return state.actionsSortOrder === "asc" ? 1 : -1;
        }
        return 0;
      };
      return {
        ...state,
        actions: [
          ...state.actions
            .filter((a) => a.state === state.actionPartitions[0])
            .sort(sortBy),
          ...state.actions
            .filter((a) => a.state === state.actionPartitions[1])
            .sort(sortBy),
          ...state.actions
            .filter((a) => a.state === state.actionPartitions[2])
            .sort(sortBy),
        ],
        actionsSortBy: action.data,
      };
    case "actionsSortOrder/change":
      const sortOrder = (a, b) => {
        if (a[state.actionsSortBy] < b[state.actionsSortBy]) {
          return action.data === "asc" ? -1 : 1;
        }
        if (a[state.actionsSortBy] > b[state.actionsSortBy]) {
          return action.data === "asc" ? 1 : -1;
        }
        return 0;
      };
      return {
        ...state,
        actions: [
          ...state.actions
            .filter((a) => a.state === state.actionPartitions[0])
            .sort(sortOrder),
          ...state.actions
            .filter((a) => a.state === state.actionPartitions[1])
            .sort(sortOrder),
          ...state.actions
            .filter((a) => a.state === state.actionPartitions[2])
            .sort(sortOrder),
        ],
        actionsSortOrder: action.data,
      };
    case "dashboard/large":
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          size: "large",
        },
      };
    case "dashboard/medium":
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          size: "medium",
        },
      };
    case "dashboard/small":
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          size: "small",
        },
      };
    case "ui/state":
      return {
        ...state,
        ui: {
          ...state.ui,
          state: action.data,
        },
      };
    case "action/show":
      return {
        ...state,
        actionShown: action.data.id,
      };
    case "futures/add":
      console.log(action.data);
      const newFutures = {};

      newFutures[action.data.tick] = [action.data.future];

      return {
        ...state,
        futures: {
          ...state.futures,
          ...newFutures,
        },
      };
    default:
      return state;
  }
}
