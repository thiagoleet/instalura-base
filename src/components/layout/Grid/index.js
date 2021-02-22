import styled, { css } from "styled-components";
import breakpoints from "./_breakpoints";

const Col = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  max-width: 100%;
  ${({ value, offset }) => breakpoints.col.breakpoint(value, offset)}
`;

export const Grid = {
  Container: styled.div`
    width: 100%;
    padding-right: 28px;
    padding-left: 28px;
    margin-right: auto;
    margin-left: auto;
    ${breakpoints.grid.breakpoint}
  `,
  Row: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -16px;
    margin-left: -16px;
  `,
  Col,
};
