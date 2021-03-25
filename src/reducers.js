function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case 'game/start':
      return {
        ...state,
        game: {
          ...state.game,
          started: true,
        },
      };
    case 'game/introStep':
      return {
        ...state,
        game: {
          ...state.game,
          introStep: action.data,
        },
      };
    case 'clock/start':
      return {
        ...state,
        clock: {
          ...state.clock,
          isRunning: true
        }
      };
    case 'clock/fast':
      return {
        ...state,
        clock: {
          ...state.clock,
          isFast: true,
        }
      };
    case 'clock/normal':
      return {
        ...state,
        clock: {
          ...state.clock,
          isFast: false,
        }
      };
    case 'clock/stop':
      return {
        ...state,
        clock: {
          ...state.clock,
          isRunning: false
        }
      };
    case 'clock/tick':
      const tick = state.clock.tick + 1;
      return {
        ...state,
        records: [
          ...state.records,
          {
            temperature: state.temperature.current,
            love: state.love
          }
        ],
        clock: {
          ...state.clock,
          tick,
        }
      };
    case 'temperature/increase':
      const currentTemp = state.temperature.current + action.data;
      return {
        ...state,
        temperature: {
          ...state.temperature,
          current: currentTemp,
        }
      };
    case 'temperature/decrease':
      const current = state.temperature.current - action.data;
      return {
        ...state,
        temperature: {
          ...state.temperature,
          current,
        }
      };
    case 'love/decrease':
      const decreasedLove = state.love - action.data;
      return {
        ...state,
        love: decreasedLove,
      };
    case 'love/increase':
      const increasedLove = state.love + action.data;
      return {
        ...state,
        love: increasedLove,
      };
    case 'action/activate':
      return {
        ...state,
        actions: state.actions.map(a => a.id === action.data.id ? { ...a, state: 'active' } : a),
      };
    case 'action/end':
      return {
        ...state,
        actions: state.actions.map(a => a.id === action.data.id ? { ...a, state: 'ended' } : a),
      };
    case 'actions/open':
      return {
        ...state,
        actionsVisible: true,
      };
    case 'actions/close':
      return {
        ...state,
        actionsVisible: false,
      };
    case 'dashboard/large':
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          size: 'large',
        },
      };
    case 'dashboard/medium':
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          size: 'medium',
        },
      };
    case 'dashboard/small':
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          size: 'small',
        },
      };
    case 'ui/state':
      return {
        ...state,
        ui: {
          ...state.ui,
          state: action.data,
        },
      };
    case 'action/show':
      return {
        ...state,
        actionShown: action.data.id,
      };
    default:
      return state;
  }
}
