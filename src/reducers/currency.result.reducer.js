const defaultCur = {
  checked: 'USD - Долар США'
}

export const currencyResultReducer = (state = defaultCur, action) => {
  switch (action.type) {
    case 'CUR_RESULT':
      return {...state, checked: action.payload}
    default:
      return state
  }
}