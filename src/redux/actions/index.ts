import {Dispatch} from 'redux';

import API from '../../api';
import {ActionTypes, PostActions, ToggleThemeAction} from './types';
import {RootState} from '../reducers/types';

export const toggleTheme = (): ToggleThemeAction => ({
  type: ActionTypes.TOGGLE_THEME,
});

export const fetchOlderPosts = (start: number, end: number) => {
  return async (dispatch: Dispatch<PostActions>) => {
    dispatch({type: ActionTypes.FETCH_POSTS_START});
    try {
      const {data} = await API.fetchPosts(start, end);
      dispatch({type: ActionTypes.FETCH_OLDER_POSTS_SUCCESS, payload: data});
    } catch (error) {
      dispatch({
        type: ActionTypes.FETCH_POSTS_FAIL,
        payload: new Error(String(error)),
      });
    }
  };
};

export const fetchNewerPosts = (start: number, end: number) => {
  return async (dispatch: Dispatch<PostActions>) => {
    dispatch({type: ActionTypes.FETCH_POSTS_START});
    try {
      const {data} = await API.fetchPosts(start, end);
      dispatch({type: ActionTypes.FETCH_NEWER_POSTS_SUCCESS, payload: data});
    } catch (error) {
      dispatch({
        type: ActionTypes.FETCH_POSTS_FAIL,
        payload: new Error(String(error)),
      });
    }
  };
};

export const fetchUser = (userId: number) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const {users, loading} = getState().users;

    // To avoid duplicate fetching:
    // only if loading is false and the user not in state
    if (!(loading || users.some(user => user.id === userId))) {
      // start loading - otherwise don't do anything (avoid unnecessary network request)
      dispatch({type: ActionTypes.FETCH_USERS_START});
      try {
        const {data} = await API.fetchUser(userId);
        dispatch({type: ActionTypes.FETCH_USERS_SUCCESS, payload: data});
      } catch (error) {
        dispatch({type: ActionTypes.FETCH_USERS_FAIL, payload: error});
      }
    }
  };
};
