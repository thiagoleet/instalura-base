import styled, { css } from "styled-components";
import {
  getColor,
  getContrastText,
  breakpointsMedia,
} from "../../../theme/utils";
import { TextStyleVariants } from "../../foundation/Text";

const ButtonGhost = css`
  background-color: transparent;
  color: ${getColor};
`;

const ButtonDefault = css`
  background-color: ${getColor};
  color: ${getContrastText};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariants.paragraph1}
    `,
  })}

  ${({ $ghost }) => ($ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
