const defaultState = {
  'USD - Долар США': 0,
  'EUR - Євро': 0,
  'UAH - Українська гривня': 1,

}

export const getCurrencyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CURRENCY':
      return {...state, ...action.payload}
    default:
      return state
  }
}