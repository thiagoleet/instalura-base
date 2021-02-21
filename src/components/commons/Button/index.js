import styled, { css } from "styled-components";
import { getColor, getContrastText } from "../../../helpers";
import { TextStyleVariantsMap } from "../../foundation/Text";

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
  ${TextStyleVariantsMap.paragraph1}
  ${({ $ghost }) => ($ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
