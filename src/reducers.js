export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case 'SOMETHING':
      return state;
    default:
      return state;
  }
}
