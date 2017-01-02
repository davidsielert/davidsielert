// Set up your root reducer here...
 import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import home from './homePageReducer';

const rootReducer = combineReducers({
  home,
  routing: routerReducer
});

export default rootReducer;
