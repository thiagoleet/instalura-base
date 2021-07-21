import { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils';
import { TextStyleVariants } from '../../../foundation/Text';

const menuWrapper = {
  breakpoint: breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  }),
};

const leftSide = {
  breakpoint: breakpointsMedia({
    md: css`
      width: 131px;
      height: 32px;
      order: initial;
      padding-right: 16px;
    `,
  }),
};

const rightSide = {
  breakpoint: breakpointsMedia({
    md: css`
      order: initial;
    `,
  }),
};

const centralSide = {
  breakpoint: breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  }),
  a: {
    breakpoint: breakpointsMedia({
      xs: css`
        ${TextStyleVariants.smallestException}
      `,
      md: css`
        ${TextStyleVariants.paragraph1}
      `,
    }),
  },
};

export default {
  centralSide,
  leftSide,
  rightSide,
  menuWrapper,
};
