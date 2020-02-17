import { css } from 'emotion';
import styled from 'react-emotion';

export const flexCenter = props => css`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction};
`;

export const mxw80 = css`
  height: 100%;
  margin: 0 auto;
  max-width: 80rem !important;
`;
