import React from 'react';

import {AuthorDetailHeading, AuthorDetailText} from './styles';
import {DetailItemProps} from '../../types';
import {useThemeState} from '../../redux/hooks/useReduxSelectors';

const DetailItem: React.FC<DetailItemProps> = ({label, value, themeValue}) => {
  const currentTheme = useThemeState();

  return (
    <AuthorDetailText themeValue={currentTheme}>
      <AuthorDetailHeading themeValue={themeValue}>
        {label}:{' '}
      </AuthorDetailHeading>
      {value}
    </AuthorDetailText>
  );
};

export default DetailItem;
