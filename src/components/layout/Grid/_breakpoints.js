import { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils';

const colWidthHelper = (value) => {
  if (value) {
    return css`
      flex-grow: 0;
      flex-grow: 1;
      flex-basis: ${(100 * value) / 12}%;
      max-width: ${(100 * value) / 12}%;
    `;
  }
  return '';
};

const grid = {
  breakpoint: breakpointsMedia({
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
      padding-right: 16px;
      padding-left: 16px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  }),
};

const gridColCalculator = (value) => {
  if (typeof value === 'number') {
    return colWidthHelper(value);
  }
  if (typeof value === 'object') {
    return breakpointsMedia({
      xs: colWidthHelper(value?.xs),
      sm: colWidthHelper(value?.sm),
      md: colWidthHelper(value?.md),
      lg: colWidthHelper(value?.lg),
      xl: colWidthHelper(value?.xl),
    });
  }
  return '';
};

const colMarginHelper = (offset) => {
  if (offset) {
    return css`
      margin-left: ${(100 * offset) / 12}%;
    `;
  }
  return '';
};

const gridOffsetCalculator = (offset) => {
  if (typeof value === 'number') {
    return colMarginHelper(offset);
  }
  if (typeof value === 'object') {
    return breakpointsMedia({
      xs: colMarginHelper(offset?.xs),
      sm: colMarginHelper(offset?.sm),
      md: colMarginHelper(offset?.md),
      lg: colMarginHelper(offset?.lg),
      xl: colMarginHelper(offset?.xl),
    });
  }
  return '';
};

const col = {
  breakpoint: (value, offset) => css`
    ${gridColCalculator(value)}
    ${gridOffsetCalculator(offset)}
  `,
};

export default { grid, col };
