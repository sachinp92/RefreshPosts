import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from '../types/NavigationTypes';
import {useThemeState} from '../redux/hooks/useReduxSelectors';
import {ThemeState} from '../redux/reducers/types';
import ThemeToggleButton from '../components/ThemeToggleButton/ThemeToggleButton';
import {AppThemeColors} from '../types/Layout';

import Feed from '../screens/Feed';
import Post from '../screens/Post';
import Author from '../screens/Author';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const currentTheme = useThemeState();
  const headerRight = () => <ThemeToggleButton />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            currentTheme === ThemeState.Light
              ? AppThemeColors.White
              : AppThemeColors.Black,
        },
        headerTintColor:
          currentTheme === ThemeState.Light
            ? AppThemeColors.Black
            : AppThemeColors.White,
        headerRight,
      }}>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Author" component={Author} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
