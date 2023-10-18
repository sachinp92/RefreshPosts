import styled from 'styled-components/native';

import {AppThemeColors, ThemeProps} from '../../types/Layout';
import {ThemeState} from '../../redux/reducers/types';

export const PostPreviewContainer = styled.View<ThemeProps>`
  background-color: ${({themeValue}) =>
    themeValue === ThemeState.Light
      ? AppThemeColors.White
      : AppThemeColors.Black};
  width: 90%;
  margin: 10px auto;
  border-radius: 7.5px;
  padding: 20px;
`;

export const PostPreviewText = styled.Text<ThemeProps>`
  color: ${({themeValue}) =>
    themeValue === ThemeState.Light
      ? AppThemeColors.Black
      : AppThemeColors.White};
  margin-top: 15px;
  font-weight: bold;
`;
