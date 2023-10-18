import {IPost, IUser} from '../../../types';

export interface PostState {
  posts: IPost[];
  loading: boolean;
  error: null | Error;
}

export interface UsersState {
  users: IUser[];
  loading: boolean;
  error: null | Error;
}

export enum ThemeState {
  Light = 'LIGHT',
  Dark = 'DARK',
}

export interface RootState {
  users: UsersState;
  posts: PostState;
  theme: ThemeState;
}
