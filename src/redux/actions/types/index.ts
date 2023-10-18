import {IPost, IUser} from '../../../types';

export enum ActionTypes {
  FETCH_POSTS_START = 'FETCH_POSTS_START',
  FETCH_OLDER_POSTS_SUCCESS = 'FETCH_OLDER_POSTS_SUCCESS',
  FETCH_NEWER_POSTS_SUCCESS = 'FETCH_NEWER_POSTS_SUCCESS',
  FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL',
  FETCH_USERS_START = 'FETCH_USERS_START',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAIL = 'FETCH_USERS_FAIL',
  TOGGLE_THEME = 'TOGGLE_THEME',
}

export interface ToggleThemeAction {
  type: ActionTypes.TOGGLE_THEME;
}

interface FetchUsersStartAction {
  type: ActionTypes.FETCH_USERS_START;
  payload: any;
}

interface FetchUsersSuccessAction {
  type: ActionTypes.FETCH_USERS_SUCCESS;
  payload: IUser;
}

interface FetchUsersFailAction {
  type: ActionTypes.FETCH_USERS_FAIL;
  payload: Error;
}

export type UserActions =
  | FetchUsersStartAction
  | FetchUsersSuccessAction
  | FetchUsersFailAction;

interface FetchPostsStartAction {
  type: ActionTypes.FETCH_POSTS_START;
}

interface FetchPostsFailAction {
  type: ActionTypes.FETCH_POSTS_FAIL;
  payload: Error;
}

interface FetchOlderPostsSuccessAction {
  type: ActionTypes.FETCH_OLDER_POSTS_SUCCESS;
  payload: IPost[];
}

interface FetchNewerPostsSuccessAction {
  type: ActionTypes.FETCH_NEWER_POSTS_SUCCESS;
  payload: IPost[];
}

export type PostActions =
  | FetchPostsStartAction
  | FetchPostsFailAction
  | FetchOlderPostsSuccessAction
  | FetchNewerPostsSuccessAction;
