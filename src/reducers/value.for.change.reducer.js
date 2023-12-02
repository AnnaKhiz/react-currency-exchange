const defaultInputValue = {
  value: 0
}

export const valueForChangeReducer = (state = defaultInputValue, action) => {
  switch (action.type) {
    case 'GET_VALUE':
      return {...state, value: action.payload}
    default:
      return state
  }
}