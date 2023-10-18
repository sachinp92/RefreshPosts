import {ActionTypes, ToggleThemeAction} from '../actions/types';
import {ThemeState} from './types';

const initialState = ThemeState.Light;

export default (state = initialState, action: ToggleThemeAction) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_THEME:
      return state === ThemeState.Light ? ThemeState.Dark : ThemeState.Light;
    default:
      return state;
  }
};
