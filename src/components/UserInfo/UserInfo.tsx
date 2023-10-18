import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {generateAvatar} from '../../utils/helpers/generateAvatar';
import useAppDispatch from '../../redux/hooks/useAppDispatch';
import {useThemeState, useUsers} from '../../redux/hooks/useReduxSelectors';
import {fetchUser} from '../../redux/actions';
import {AuthorScreenNavigationProp} from '../../types/NavigationTypes';
import {AvatarImage, PressableUserInfo, UserNameText} from './styles';
import {IUserInfoProps} from '../../types';

const UserInfo: React.FC<IUserInfoProps> = ({userId, layout}) => {
  const dispatch = useAppDispatch();
  const {users} = useUsers();
  const user = users.find(foundUser => foundUser.id === userId);
  const currentTheme = useThemeState();
  const navigation = useNavigation<AuthorScreenNavigationProp>();

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser(userId));
    }
  }, [dispatch, user, userId]);

  return (
    <PressableUserInfo
      themeValue={currentTheme}
      layoutType={layout}
      onPress={() => navigation.navigate('Author', {userId})}>
      <AvatarImage
        themeValue={currentTheme}
        layoutType={layout}
        source={{uri: generateAvatar(userId)}}
      />
      <UserNameText themeValue={currentTheme} layoutType={layout}>
        {user?.name}
      </UserNameText>
    </PressableUserInfo>
  );
};

export default UserInfo;
