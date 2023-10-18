import styled from 'styled-components/native';

import {AppThemeColors, ThemeProps} from '../../types/Layout';
import {ThemeState} from '../../redux/reducers/types';

export const PostText = styled.Text<ThemeProps>`
  font-size: 20px;
  text-align: center;
  color: ${({themeValue}) =>
    themeValue === ThemeState.Light
      ? AppThemeColors.Black
      : AppThemeColors.White};
`;

export const PageContainer = styled.ScrollView<ThemeProps>`
  padding: 5%;
  background-color: ${({themeValue}) =>
    themeValue === ThemeState.Light
      ? AppThemeColors.LightGray
      : AppThemeColors.DarkGray};
`;

export const PostContainer = styled.View<ThemeProps>`
  background-color: ${({themeValue}) =>
    themeValue === ThemeState.Light
      ? AppThemeColors.White
      : AppThemeColors.Black};
  border-radius: 7.5px;
  padding: 20px;
`;
