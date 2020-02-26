import styled from '@emotion/styled/macro';
import { flexRowBet, padding15 } from '../../../globals/global_styles';

export const MobileContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Nav = styled.div`
  width: 100%;
`;

/* TopNavBar */
export const TopNav = styled.div`
  width: 100%;
  background: #09295c;
  padding: 5px 0;
`;

export const TopContent = styled.div`
  ${flexRowBet}
  height:100%;
`;
export const AcessibilityWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
`;

export const AdjustIcon = styled.a`
  :after {
    content: '';
    position: relative;
    display: inline-block;
    width: 1px;
    height: 16px;
    opacity: 0.5;
    background-color: #fff;
    margin-bottom: -2px;
    margin-left: 10px;
  }
`;

export const SocialsWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const FaceIcon = styled.a`
  display: flex;
  align-items: center;
`;
export const InstaIcon = styled.a`
  display: flex;
  align-items: center;
`;
/* TopNavBar */

/* MainNav */
export const MobileNav = styled.div`
  width: 100%;
  background: #004fff;
  padding: 5px 0;
`;
export const NavContent = styled.div`
  ${flexRowBet}
  height: 100%;
`;
export const LeftContent = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: none;
    outline: none;
  }
  svg {
    width: auto !important;
  }
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Account = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  svg {
    width: auto !important;
  }
`;
export const LogoWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 100px;
    height: 50px;
  }
`;
/* MainNav */
