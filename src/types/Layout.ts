import {ThemeState} from '../redux/reducers/types';

export enum UserInfoLayout {
  Header = 'HEADER',
  Post = 'POST',
}

export enum AppThemeColors {
  ScrollToTopBackground = '#9F9',
  Black = '#000',
  White = '#FFF',
  DarkGray = '#333',
  LightGray = '#CCC',
  AvatarBackground = '#F5F5DC',
}

export interface ThemeProps {
  themeValue: ThemeState;
}

export interface UserInfoStylingProps {
  layoutType: UserInfoLayout;
  themeValue: ThemeState;
}
