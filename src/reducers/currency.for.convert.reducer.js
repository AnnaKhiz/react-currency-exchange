const defaultCur = {
  checked: 'USD'
}

export const currencyForConvertReducer = (state = defaultCur, action) => {
  switch (action.type) {
    case 'CUR_CONVERT':
      return {...state, checked: action.payload}
    default:
      return state
  }
}