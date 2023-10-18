import React from 'react';
import {useRoute} from '@react-navigation/native';

import {usePosts, useThemeState} from '../../redux/hooks/useReduxSelectors';
import UserHeader from '../../components/UserInfo';
import {UserInfoLayout} from '../../types/Layout';
import {PageContainer, PostContainer, PostText} from './styles';

const Post = () => {
  const route = useRoute();
  const {id, userId} = route.params as {id: number; userId: number};
  const {posts} = usePosts();
  const post = posts.find(foundPost => foundPost.id === id);

  const currentTheme = useThemeState();

  return (
    <PageContainer themeValue={currentTheme}>
      <PostContainer themeValue={currentTheme}>
        <UserHeader userId={userId} layout={UserInfoLayout.Post} />
        <PostText themeValue={currentTheme}>{post?.body}</PostText>
      </PostContainer>
    </PageContainer>
  );
};

export default Post;
