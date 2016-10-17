import { combineReducers } from 'redux';
import redditReducer from './reducer_reddit';

const rootReducer = combineReducers({
  list : redditReducer
});

export default rootReducer;
