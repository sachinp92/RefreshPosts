import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {IPost} from '../../types';
import UserHeader from '../UserInfo';
import truncateText from '../../utils/helpers/truncateText';
import {PostScreenNavigationProp} from '../../types/NavigationTypes';
import {UserInfoLayout} from '../../types/Layout';
import {PostPreviewContainer, PostPreviewText} from './styles';
import {useThemeState} from '../../redux/hooks/useReduxSelectors';

const PostPreview: React.FC<IPost> = ({id, body, userId}) => {
  const navigation = useNavigation<PostScreenNavigationProp>();
  const truncatedBody = truncateText(body, 100);
  const currentTheme = useThemeState();

  return (
    <PostPreviewContainer themeValue={currentTheme}>
      <UserHeader userId={userId} layout={UserInfoLayout.Header} />
      <PostPreviewText
        themeValue={currentTheme}
        onPress={() => navigation.navigate('Post', {id, userId})}>
        {truncatedBody}
      </PostPreviewText>
    </PostPreviewContainer>
  );
};

export default PostPreview;
