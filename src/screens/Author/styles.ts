import styled from 'styled-components/native';

import {AppThemeColors, ThemeProps} from '../../types/Layout';
import {ThemeState} from '../../redux/reducers/types';

export const PageContainer = styled.ScrollView<ThemeProps>`
  padding: 5%;
  background-color: ${({themeValue}) =>
    themeValue === ThemeState.Light
      ? AppThemeColors.LightGray
      : AppThemeColors.DarkGray};
`;

export const AuthorContainer = styled.View<ThemeProps>`
  background-color: ${({themeValue}) =>
    themeValue === ThemeState.Light
      ? AppThemeColors.White
      : AppThemeColors.Black};
  border-radius: 7.5px;
  padding: 20px;
`;
