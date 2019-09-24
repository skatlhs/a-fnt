import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';

export const loggedInStatus = createReducer({}, {
  [types.SER_LOGED_IN_STATE](state, action) {
    return action;
  }
});