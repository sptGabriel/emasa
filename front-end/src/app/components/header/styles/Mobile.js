import styled from '@emotion/styled/macro';
import { flexRowBet } from '../../../globals/flex';

export const Nav = styled.div`
  width: 100%;
  background: #061938;
`;

export const NavContent = styled.div`
  ${flexRowBet}
  height: 100%;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  button {
    background: transparent;
    border: none;
    outline: none;
    padding: 10px 0;
    padding-right: 15px;
  }
  svg {
    width: auto !important;
  }
`;

export const LogoContent = styled.div`
  ${flexRowBet}
  justify-content:center;

  background: red;
  max-height: 50px;
  img {
    max-height: 50px;
  }
`;

export const RightContent = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;
