import {combineReducers, legacy_createStore as createStore} from "redux";
import {getCurrencyReducer, currencyForConvertReducer, currencyResultReducer, valueForChangeReducer, valueResultReducer} from './reducers';

const rootReducers = combineReducers({
  getCurrencyReducer,
  currencyForConvertReducer,
  currencyResultReducer,
  valueForChangeReducer,
  valueResultReducer
})

export default createStore(rootReducers);