import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Types used with React Navigation - these will ultimately be passed onto ScreenPropTypes.ts

type PostScreenProps = {
  id: number;
  userId?: number;
};

type AuthorScreenProps = {
  userId: number;
  id?: number;
};

export type RootStackParamList = {
  Feed: undefined;
  Post: PostScreenProps;
  Author: AuthorScreenProps;
};

export type PostScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Post'
>;

export type AuthorScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Author'
>;

export type FeedScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Feed'
>;
