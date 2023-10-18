import styled from 'styled-components/native';

import {AppThemeColors, ThemeProps} from '../../types/Layout';
import {ThemeState} from '../../redux/reducers/types';

export const FeedContainer = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${({themeValue}) =>
    themeValue === ThemeState.Light
      ? AppThemeColors.LightGray
      : AppThemeColors.DarkGray};
  align-items: center;
  justify-content: center;
`;

// Could have gone with a Pressable but this is simpler for the use-case
export const ScrollToTopText = styled.Text<ThemeProps>`
  padding: 10px;
  background-color: ${AppThemeColors.ScrollToTopBackground};
  color: ${AppThemeColors.Black};
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;
