import { combineReducers } from 'redux';
import reducers from './modules/modal';

const rootReducer = () =>
  combineReducers({
    activeDialog: reducers.reducers.activeDialog,
  });

export default rootReducer;
