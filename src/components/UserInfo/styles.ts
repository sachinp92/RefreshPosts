import styled from 'styled-components/native';

import {
  AppThemeColors,
  UserInfoLayout,
  UserInfoStylingProps,
} from '../../types/Layout';
import {ThemeState} from '../../redux/reducers/types';

export const PressableUserInfo = styled.Pressable<UserInfoStylingProps>`
  flex-direction: ${({layoutType}) =>
    layoutType === UserInfoLayout.Header ? 'row' : 'column'};
`;

export const AvatarImage = styled.Image<UserInfoStylingProps>`
  width: ${({layoutType}) =>
    layoutType === UserInfoLayout.Header ? '35px' : '100%'};
  aspect-ratio: 1;
  height: ${({layoutType}) => layoutType === UserInfoLayout.Header && '35px'};
  border-radius: ${({layoutType}) =>
    layoutType === UserInfoLayout.Header ? '50px' : '0px'};
  background-color: ${AppThemeColors.AvatarBackground};
  border-color: ${({themeValue}) =>
    themeValue === ThemeState.Light
      ? AppThemeColors.Black
      : AppThemeColors.AvatarBackground};
  border-width: 1px;
  margin-top: ${({layoutType}) => layoutType === UserInfoLayout.Post && '10px'};
`;

export const UserNameText = styled.Text<UserInfoStylingProps>`
  font-weight: bold;
  text-align: ${({layoutType}) =>
    layoutType === UserInfoLayout.Post ? 'center' : 'left'};
  font-size: ${({layoutType}) =>
    layoutType === UserInfoLayout.Header ? '16px' : '24px'};
  color: ${({themeValue}) =>
    themeValue === ThemeState.Light
      ? AppThemeColors.Black
      : AppThemeColors.White};
  margin-left: ${({layoutType}) =>
    layoutType === UserInfoLayout.Header && '20px'};
  margin-top: ${({layoutType}) =>
    layoutType === UserInfoLayout.Header && '10px'};
  margin-bottom: ${({layoutType}) =>
    layoutType === UserInfoLayout.Post && '20px'};
`;
