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

/* SideBar */
export const SideBar = styled.div`
  position: absolute;
  background: white;
  width: 70vw;
  top: 0;
  bottom: 0;
  left: ${props => (props.IsOpen ? '0' : '-70vw')};
  z-index: 99;
  transition: all 0.2s ease;
`;

export const SideBarHeader = styled.div`
  width: 100%;
  height: 50px;
  background: #004fff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 50px;
  }
`;

export const SideBarBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    width: 100%;
  }
  li {
    border-bottom: 1px solid #eee;
    font-family: sans-serif;
    font-size: 0.8em;
    text-decoration: none;
    letter-spacing: 1px;
    display: block;
    padding: 14px 20px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

/* SideBar */

/* MainNav */
export const MobileNav = styled.div`
  width: 100%;
  background: #004fff;
  padding: 5px 0;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
export const NavContent = styled.div`
  ${flexRowBet}
  height: 100%;
`;

export const StyledBurger = styled.button`
  position: absolute;
  left: ${props => (props.open ? '70vw' : '0')};
  top: ${props => (props.open ? '-50px' : '')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;
  transition: all 0.2s ease;
  &:focus {
    outline: none;
  }

  div {
    width: 1.6rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#EFFFFA' : '#EFFFFA')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :nth-of-type(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;

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
