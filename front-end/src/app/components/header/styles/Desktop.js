import styled from '@emotion/styled/macro';
import { mxw80, flexCenter, flexRowBet } from '../../../globals/flex';
// border-bottom: 1px solid rgba(255, 255, 255, 0.2);

export const Header = styled.header`
  width: 100%;
  height: auto;
`;
export const Container = styled.div`
  ${mxw80}
`;
//top navbar
export const TopNav = styled.div`
  width: 100%;
  background: #09295c;
`;
export const ContentTopNav = styled.div`
  ${flexRowBet};
  height: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
export const WrapAcessibility = styled.div`
  ${flexRowBet};
  width: 100%;
  padding: 0.5rem 0;
  line-height: 24px;
  font-family: 'Poppins', sans-serif;
  p {
    position: relative;
    display: inline-block;
    pointer-events: none;
    color: white;
    padding-right: 9px;
    font-family: inherit;
  }
  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    height: auto;
  }
  a {
    font-family: inherit;
    color: #fff;
    font-size: 13px;
    pointer-events: none;
    padding: 0 9px;
  }
`;
// finished

// HeaderMid
export const HeaderMid = styled.div`
  width: 100%;
  background: #09295c;
`;
export const ContentMid = styled.div`
  ${flexRowBet};
  padding: 2.8rem 0;
`;
export const LogoContainer = styled.div`
  width: 300px;
  img {
    width: 100%;
  }
`;
export const SearchContainer = styled.div`
  ${flexRowBet};
  width: calc(100% - 500px);
  justify-content: center;
`;
export const IconContainer = styled.div`
  background: #09295c;
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 10px 10px;
  cursor: pointer;
  :hover {
    color: white;
    background: #004fff;
  }
`;
export const FlexInput = styled.div`
  width: 60%;
  padding: 0 5px;
  display: inline-flex;
  align-items: center;
  border-radius: 30px;
  height: 47px;
  border: 1px solid #dcdcdc;
  background: #fff;
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.04);
  transition: all 0.4s;
  & > input {
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

export const PopUp = styled.div`
  position: absolute;
  transform: translateY(calc(100% + 1rem));
  width: 200px;
  background: white;
  height: 200px;
  display: ${props => (props.hover ? 'block' : 'none')};
`;
export const WrapAccount = styled.ul`
  position: relative;
  ${flexRowBet};
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  li {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 200px;
  }
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    font-size: 1em;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #fff;
    text-transform: capitalize;
  }
  span:nth-of-type(1) {
    padding: 0 10px;
  }
`;
//Finished

// nav Main

export const Nav = styled.nav`
  width: 100%;
  height: auto;
  background: #061938;
  a {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    text-decoration: none;
    letter-spacing: 1.2px;
    display: block;
    padding: 16px 20px;
    font-weight: 600;
    line-height: 24px;
  }
`;

export const NavUl = styled.ul`
  width: 100%;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
`;

export const NavLi = styled.li`
  color: #fff;
  :hover {
    background: #09295c;
    transition-duration: 0.5s;
    transition-property: background-color, color;
  }
`;
