import styled from 'styled-components';
import breakpoints from './_breakpoints';
import { propToStyle } from '../../../theme/utils';

const Col = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  max-width: 100%;
  ${({ value, offset }) => breakpoints.col.breakpoint(value, offset)}
  ${propToStyle('display')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexDirection')}
`;

const Grid = {
  Container: styled.div`
    width: 100%;
    padding-right: 28px;
    padding-left: 28px;
    margin-right: auto;
    margin-left: auto;
    ${breakpoints.grid.breakpoint}
    ${propToStyle('marginTop')}
  `,
  Row: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -16px;
    margin-left: -16px;
  `,
  Col,
};

export default Grid;
