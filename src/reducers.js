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
      const clockStart = {
        isRunningMain:
          action.data && action.data === "main"
            ? true
            : state.clock.isRunningMain,
        isRunningOverlay:
          action.data && action.data === "overlay"
            ? true
            : state.clock.isRunningOverlay,
        isRunningButton:
          action.data && action.data === "button"
            ? true
            : state.clock.isRunningButton,
      };

      return {
        ...state,
        clock: {
          ...state.clock,
          ...clockStart,
          isRunning: clockStart.isRunningMain && clockStart.isRunningOverlay && clockStart.isRunningButton,
        },
      };
    case "clock/stop":
      const clockStop = {
        isRunningMain:
          action.data && action.data === "main"
            ? false
            : state.clock.isRunningMain,
        isRunningOverlay:
          action.data && action.data === "overlay"
            ? false
            : state.clock.isRunningOverlay,
        isRunningButton:
          action.data && action.data === "button"
            ? false
            : state.clock.isRunningButton,
      };

      return {
        ...state,
        clock: {
          ...state.clock,
          ...clockStop,
          isRunning: clockStop.isRunningMain && clockStop.isRunningOverlay && clockStop.isRunningButton,
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
      let multiplier = 1;
      if (state.love > 20 && state.love < 80) {
        multiplier = 10;
      }
      const newLove = state.love + action.data * multiplier;
      return {
        ...state,
        love: newLove,
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
    case "actions/open":
      return {
        ...state,
        actionsVisible: true,
      };
    case "actions/close":
      return {
        ...state,
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
