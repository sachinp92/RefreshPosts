import {ActionTypes, UserActions} from '../actions/types';
import {UsersState} from './types';

const initialState: UsersState = {
  error: null,
  loading: false,
  users: [],
};

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
      };
    case ActionTypes.FETCH_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
