/* eslint-disable yola/import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import history from '../browser-history';
import rootReducer from '../reducer';
import middleware from '../middleware';
import connectedStore from './connected-store';

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middleware))
);

connectedStore.set(store);

export default store;
