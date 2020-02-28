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
  background: #004fff;
  padding: 5px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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

/* SearchBox */
export const SearchWrap = styled.div`
  width: 100%;
  background: #004fff;
  padding: 10px 10px;
`;

export const SearchContent = styled.div`
  ${flexRowBet}
  height: 100%;
`;
export const IconContainer = styled.div`
  background: #004fff;
  display: flex;
  align-items: center;
  border-radius: 100%;
  padding: 10px 8px;
  cursor: pointer;
  :hover {
    color: white;
    filter: brightness(150%);
  }
`;
export const FlexInput = styled.div`
  width: 100%;
  padding: 0 5px;
  display: inline-flex;
  align-items: center;
  border-radius: 30px;
  height: 40px;
  border: 1px solid #dcdcdc;
  background: #fff;
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.04);
  transition: all 0.4s;
  input {
    background: transparent;
    width: 100%;
    height: 100%;
    border: 0;
    padding: 0.5rem 1.2rem 0.5rem 1.2rem;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #a9a9a9;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: initial;
    font-family: 'Poppins', sans-serif;
  }
`;
