import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import genericReducer from './reducers';

const rootReducer = combineReducers({
  genericData: genericReducer,
});

const asyncMiddleware = applyMiddleware(thunkMiddleware);

export default createStore(rootReducer, asyncMiddleware);