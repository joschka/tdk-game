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
    default:
      return state;
  }
}
