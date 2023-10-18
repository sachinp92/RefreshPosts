import React from 'react';

import {ThemeState} from '../../redux/reducers/types';
import {ToggleText, ToggleThemePressable} from './styles';
import useAppDispatch from '../../redux/hooks/useAppDispatch';
import {useThemeState} from '../../redux/hooks/useReduxSelectors';
import {toggleTheme} from '../../redux/actions';

const ThemeToggleButton = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useThemeState();

  return (
    <ToggleThemePressable
      themeValue={currentTheme}
      onPress={() => dispatch(toggleTheme())}>
      <ToggleText themeValue={currentTheme}>
        {currentTheme === ThemeState.Light
          ? `${ThemeState.Dark} Theme`
          : `${ThemeState.Light} Theme`}
      </ToggleText>
    </ToggleThemePressable>
  );
};

export default ThemeToggleButton;
