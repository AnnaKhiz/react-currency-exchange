const defaultState = {
  USD: 0,
  EUR: 0,
  UAH: 1,

}

export const getCurrencyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CURRENCY':
      return {...state, ...action.payload}
    default:
      return state
  }
}