import styled from 'styled-components/native';

import {AppThemeColors, ThemeProps} from '../../types/Layout';
import {ThemeState} from '../../redux/reducers/types';

export const AuthorDetailHeading = styled.Text<ThemeProps>`
  font-weight: bold;
  color: ${({themeValue}) =>
    themeValue === ThemeState.Light
      ? AppThemeColors.Black
      : AppThemeColors.White};
`;

export const AuthorDetailText = styled.Text<ThemeProps>`
  color: ${({themeValue}) =>
    themeValue === ThemeState.Light
      ? AppThemeColors.Black
      : AppThemeColors.White};
`;
