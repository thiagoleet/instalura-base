import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { getTypographyVariant } from "../../../helpers";

const textStyleVariant = (typographyVariant) => css`
  font-size: ${typographyVariant.fontSize};
  line-height: ${typographyVariant.lineHeight};
  font-weight: ${typographyVariant.fontWeight};
`;

export const TextStyleVariantsMap = {
  paragraph1: ({ theme }) => {
    const variant = "paragraph1";
    return textStyleVariant(getTypographyVariant(theme, variant));
  },
  paragraph2: ({ theme }) => {
    const variant = "paragraph2";
    return textStyleVariant(getTypographyVariant(theme, variant));
  },
  smallestException: ({ theme }) => {
    const variant = "smallestException";
    return textStyleVariant(getTypographyVariant(theme, variant));
  },
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
`;

const Text = ({ tag, variant, children }) => {
  return (
    <TextBase as={tag} variant={variant}>
      {children}
    </TextBase>
  );
};

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};

export default Text;
