import {ActionTypes, PostActions} from '../actions/types';
import {PostState} from './types';

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

export default (state = initialState, action: PostActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS_START:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_OLDER_POSTS_SUCCESS:
      const existingPostIds = new Set(state.posts.map(post => post.id));
      const newOlderUniquePosts = action.payload.filter(
        post => !existingPostIds.has(post.id),
      );
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...newOlderUniquePosts],
      };
    case ActionTypes.FETCH_NEWER_POSTS_SUCCESS:
      const newPostIds = new Set(action.payload.map(post => post.id));
      const existingUniquePosts = state.posts.filter(
        post => !newPostIds.has(post.id),
      );
      return {
        ...state,
        loading: false,
        posts: [...action.payload, ...existingUniquePosts],
      };
    case ActionTypes.FETCH_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
