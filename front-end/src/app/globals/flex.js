import { css } from '@emotion/core';

export const flex = props => css`
  display: flex;
  flex-direction: ${props.flexdirection};
`;

export const flexCenter = props => css`
  width: 100%;
  display: flex;
  justify-content: ${props.justify};
  align-items: ${props.align};
  flex-direction: ${props.flexdirection};
`;

export const flexAlignCenter = css`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const mxw80 = css`
  height: 100%;
  margin: 0 auto;
  max-width: 80rem !important;
  width: 90% !important;
`;

export const flexRowBet = props => css`
  display: flex;
  align-items: center;
  justify-content: ${props.justify};
`;
