const defaultCur = {
  checked: 'USD - Долар США'
}

export const currencyForConvertReducer = (state = defaultCur, action) => {
  switch (action.type) {
    case 'CUR_CONVERT':
      return {...state, checked: action.payload}
    default:
      return state
  }
}