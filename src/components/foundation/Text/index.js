import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { getColor, getTextStyleVariant } from "../../../theme/utils";

const paragraph1 = css`
  ${({ theme }) => getTextStyleVariant(theme.typographyVariants.paragraph1)}
`;

const paragraph2 = ({ theme }) =>
  getTextStyleVariant(theme.typographyVariants.paragraph2);

const smallestException = css`
  ${({ theme }) =>
    getTextStyleVariant(theme.typographyVariants.smallestException)}
`;

const subTitle = ({ theme }) =>
  getTextStyleVariant(theme.typographyVariants.subTitle);

const title = ({ theme }) =>
  getTextStyleVariant(theme.typographyVariants.title);

const titleXS = ({ theme }) =>
  getTextStyleVariant(theme.typographyVariants.titleXS);

export const TextStyleVariants = {
  paragraph1,
  paragraph2,
  smallestException,
  subTitle,
  title,
  titleXS,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${getColor};
`;

const Text = ({ tag, variant, children, ...props }) => {
  return (
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
};

Text.propTypes = {
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "p", "li", "a", "span"]),
  variant: PropTypes.oneOf(["paragraph1", "smallestException"]),
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};

export default Text;
