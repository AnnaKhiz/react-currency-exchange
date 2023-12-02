const defaultInputValue = {
  value: 0
}

export const valueResultReducer = (state = defaultInputValue, action) => {
  switch (action.type) {
    case 'SHOW_VALUE':
      return {...state, value: action.payload}
    default:
      return state
  }
}