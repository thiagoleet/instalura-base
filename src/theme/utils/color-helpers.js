import get from 'lodash/get';

export const getColor = ({ theme, variant }) =>
  get(theme, `colors.${variant}.color`);

export const getContrastText = ({ theme, variant }) =>
  get(theme, `colors.${variant}.contrastText`);
