import styled, { css } from 'styled-components';
import {
  getColor,
  getContrastText,
  breakpointsMedia,
  propToStyle,
} from '../../../theme/utils';
import { TextStyleVariants } from '../../foundation/Text';

const ButtonGhost = css`
  background-color: transparent;
  color: ${getColor};
`;

const ButtonDefault = css`
  background-color: ${getColor};
  color: ${getContrastText};
`;

const breakpoints = {
  button: {
    breakpoint: breakpointsMedia({
      xs: css`
        ${TextStyleVariants.smallestException}
      `,
      md: css`
        padding: 12px 43px;
        ${TextStyleVariants.paragraph1}
      `,
    }),
  },
};

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${breakpoints.button.breakpoint}

  ${({ $ghost }) => ($ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;

export default Button;
