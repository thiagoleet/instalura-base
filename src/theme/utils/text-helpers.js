import get from "lodash/get";
import { css } from "styled-components";

export const getTypographyVariant = (theme, variant = "paragraph1") =>
  get(theme, `typographyVariants.${variant}`);

export const getTextStyleVariant = (typographyVariant) => css`
  font-size: ${typographyVariant.fontSize};
  line-height: ${typographyVariant.lineHeight};
  font-weight: ${typographyVariant.fontWeight};
`;
