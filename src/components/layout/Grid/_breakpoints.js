import { breakpointsMedia } from "../../../theme/utils";
import { css } from "styled-components";

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

const _gridColCalculator = (value) => {
  if (typeof value === "number") {
    return _colWidthHelper(value);
  }
  if (typeof value === "object") {
    return breakpointsMedia({
      xs: _colWidthHelper(value?.xs),
      sm: _colWidthHelper(value?.sm),
      md: _colWidthHelper(value?.md),
      lg: _colWidthHelper(value?.lg),
      xl: _colWidthHelper(value?.xl),
    });
  }
};

const _gridOffsetCalculator = (offset) => {
  if (typeof value === "number") {
    return _colMarginHelper(offset);
  }
  if (typeof value === "object") {
    return breakpointsMedia({
      xs: _colMarginHelper(offset?.xs),
      sm: _colMarginHelper(offset?.sm),
      md: _colMarginHelper(offset?.md),
      lg: _colMarginHelper(offset?.lg),
      xl: _colMarginHelper(offset?.xl),
    });
  }
};

const _colWidthHelper = (value) => {
  if (value) {
    return css`
      flex-grow: 0;
      flex-grow: 1;
      flex-basis: ${(100 * value) / 12}%;
      max-width: ${(100 * value) / 12}%;
    `;
  }
  return;
};

const _colMarginHelper = (offset) => {
  if (offset) {
    return css`
      margin-left: ${(100 * offset) / 12}%;
    `;
  }
  return;
};

const col = {
  breakpoint: (value, offset) => {
    return css`
      ${_gridColCalculator(value)}
      ${_gridOffsetCalculator(offset)}
    `;
  },
};

export default { grid, col };
