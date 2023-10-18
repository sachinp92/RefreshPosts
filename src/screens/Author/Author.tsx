import React from 'react';
import {useRoute} from '@react-navigation/native';

import {useThemeState, useUsers} from '../../redux/hooks/useReduxSelectors';
import UserInfo from '../../components/UserInfo/UserInfo';
import {UserInfoLayout} from '../../types/Layout';
import {AuthorContainer, PageContainer} from './styles';
import DetailItem from '../../components/DetailItem';

const Author = () => {
  const route = useRoute();
  const {userId} = route.params as {userId: number};
  const {users} = useUsers();
  const user = users.find(foundUser => foundUser.id === userId);

  const currentTheme = useThemeState();

  return (
    <PageContainer themeValue={currentTheme}>
      <AuthorContainer themeValue={currentTheme}>
        <UserInfo layout={UserInfoLayout.Post} userId={userId} />
        <DetailItem
          themeValue={currentTheme}
          label="Email"
          value={user?.email}
        />
        <DetailItem
          themeValue={currentTheme}
          label="Phone"
          value={user?.phone}
        />
        <DetailItem
          themeValue={currentTheme}
          label="Website"
          value={user?.website}
        />
        <DetailItem
          themeValue={currentTheme}
          label="Company Name"
          value={user?.company.name}
        />
        <DetailItem
          themeValue={currentTheme}
          label="Company Catchphrase"
          value={user?.company.catchPhrase}
        />
        <DetailItem
          themeValue={currentTheme}
          label="Company BS"
          value={user?.company.bs}
        />
        <DetailItem
          themeValue={currentTheme}
          label="Street"
          value={user?.address.street}
        />
        <DetailItem
          themeValue={currentTheme}
          label="Suite"
          value={user?.address.suite}
        />
        <DetailItem
          themeValue={currentTheme}
          label="City"
          value={user?.address.city}
        />
        <DetailItem
          themeValue={currentTheme}
          label="Zip Code"
          value={user?.address.zipcode}
        />
        <DetailItem
          themeValue={currentTheme}
          label="Latitude"
          value={user?.address.geo.lat}
        />
        <DetailItem
          themeValue={currentTheme}
          label="Longitude"
          value={user?.address.geo.lng}
        />
        <DetailItem
          themeValue={currentTheme}
          label="Username"
          value={user?.username}
        />
        <DetailItem
          themeValue={currentTheme}
          label="User ID"
          value={user?.id}
        />
      </AuthorContainer>
    </PageContainer>
  );
};

export default Author;
