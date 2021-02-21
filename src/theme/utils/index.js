import get from "lodash/get";
import { css } from "styled-components";
import { breakpoints } from "../breakpoints";

export const getColor = ({ theme, variant }) =>
  get(theme, `colors.${variant}.color`);

export const getContrastText = ({ theme, variant }) =>
  get(theme, `colors.${variant}.contrastText`);

export const getTypographyVariant = (theme, variant = "paragraph1") =>
  get(theme, `typographyVariants.${variant}`);

export const getTextStyleVariant = (typographyVariant) => css`
  font-size: ${typographyVariant.fontSize};
  line-height: ${typographyVariant.lineHeight};
  font-weight: ${typographyVariant.fontWeight};
`;

export function breakpointsMedia(cssByBreakpoint) {
  const breakpointNames = Object.keys(breakpoints);
  return breakpointNames
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map(
      (breakpointName) => css`
        @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
          ${cssByBreakpoint[breakpointName]}
        }
      `
    );
}
