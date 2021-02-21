import get from "lodash/get";

export const getColor = ({ theme, variant }) =>
  get(theme, `colors.${variant}.color`);

export const getContrastText = ({ theme, variant }) =>
  get(theme, `colors.${variant}.contrastText`);

export const getTypographyVariant = (theme, variant = "paragraph1") =>
  get(theme, `typographyVariants.${variant}`);
