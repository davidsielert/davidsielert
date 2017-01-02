import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function homePageReducer(state = initialState.home,action){
  switch (action.type) {
    default:
      return state;
  }
}
