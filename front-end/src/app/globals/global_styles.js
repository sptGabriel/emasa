import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
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
  width: 80rem !important;
`;

export const padding15 = css`
  padding-left: 10px;
  padding-right: 10px;
`;

export const flexRowBet = props => css`
  display: flex;
  align-items: center;
  justify-content: ${props.justify};
`;

export const Overlay = styled.div`
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background: black;
  z-index: 99;
`;
