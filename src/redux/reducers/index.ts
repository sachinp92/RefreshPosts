import {combineReducers} from 'redux';

import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import themeReducer from './themeReducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  theme: themeReducer,
});
