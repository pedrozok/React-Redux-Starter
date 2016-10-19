import { combineReducers } from 'redux';
import helloReducer from './reducer_hello';

const rootReducer = combineReducers({
  hello : helloReducer
});

export default rootReducer;
