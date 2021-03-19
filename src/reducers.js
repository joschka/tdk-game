function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case 'clock/start':
      return {
        ...state,
        clock: {
          ...state.clock,
          isRunning: true
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
      const newActiveAction = state.actions.available.filter(a => a.title === action.data)[0];
      return {
        ...state,
        actions: {
          available: state.actions.available.filter(a => a.title !== action.data),
          active: [
            ...state.actions.active,
            newActiveAction,
          ]
        },
      };
    case 'action/end':
      const newEndedAction = state.actions.active.filter(a => a.title === action.data.title)[0];
      return {
        ...state,
        actions: {
          ...state.actions,
          active: state.actions.active.filter(a => a.title !== action.data.title),
          ended: [
            ...state.actions.ended,
            newEndedAction,
          ],
        },
      };
    default:
      return state;
  }
}
