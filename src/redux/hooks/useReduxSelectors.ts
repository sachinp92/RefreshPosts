import {useSelector} from 'react-redux';

import {RootState} from '../reducers/types';

export const usePosts = () => {
  const {posts, loading} = useSelector((state: RootState) => state.posts);
  return {posts, loading};
};

export const useUsers = () => {
  const {users, loading} = useSelector((state: RootState) => state.users);
  return {users, loading};
};

export const useThemeState = () =>
  useSelector((state: RootState) => state.theme);
