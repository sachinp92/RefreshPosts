import styled from 'styled-components/native';

import {ThemeState} from '../../redux/reducers/types';
import {AppThemeColors, ThemeProps} from '../../types/Layout';

export const ToggleThemePressable = styled.Pressable<ThemeProps>`
  background-color: ${({themeValue}) =>
    themeValue === ThemeState.Light
      ? AppThemeColors.Black
      : AppThemeColors.White};
  border-radius: 5px;
`;

export const ToggleText = styled.Text<ThemeProps>`
  color: ${({themeValue}) =>
    themeValue === ThemeState.Light
      ? AppThemeColors.White
      : AppThemeColors.Black};
  padding: 5px;

  border-width: 1px;
  font-weight: bold;
`;
