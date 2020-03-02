import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import { shade } from 'polished';
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
  visibility: ${props => (props.pop ? 'visible ' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${props => (props.pop ? '0.5' : '0')};
  background: black;
  z-index: 99;
  transition: all 0.2s ease;
`;

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
`;
export const Content = styled.div`
  flex: 1 0 auto;
  width: 100%;
`;
export const Footer = styled.footer`
  max-height: 20px;
  height: 100%;
  flex: none;
  background: ${shade(0.15, '#004fff')};
`;
