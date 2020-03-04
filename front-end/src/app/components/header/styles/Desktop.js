import styled from '@emotion/styled/macro';
import { mxw80, flexRowBet } from '../../../globals/global_styles';
// border-bottom: 1px solid rgba(255, 255, 255, 0.2);
import { shade } from 'polished';
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
  background: #004fff;
`;
export const ContentTopNav = styled.div`
  ${flexRowBet};
  height: 100%;
`;
export const MyAccount = styled.ul`
  position: relative;
  width: 20%;
  height: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 0.8em;
    text-decoration: none;
    letter-spacing: 1px;
    display: block;
    color: white;
    font-weight: 400;
    line-height: 24px;
    cursor: pointer;
  }
`;
export const DropDownLogin = styled.div`
  max-width: 200px;
  width: 200px;
  height: 100%;
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
    font-size: 0.8em;
    padding-right: 5px;
    font-family: inherit;
  }
  ul {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    height: auto;
  }
  a {
    display: flex;
    align-items: center;
    height: 100%;
    font-family: inherit;
    font-style: italic;
    color: #fff;
    font-size: 1em;
    pointer-events: none;
    padding: 0 5px;
  }
`;
export const WrapIcons = styled.div`
  display: flex;
`;
export const FaceIcon = styled.a`
  padding: 0 10px;
`;
export const InstaIcon = styled.a``;
// finished

// HeaderMid
export const HeaderMid = styled.div`
  width: 100%;
  background: #004fff;
`;
export const ContentMid = styled.div`
  ${flexRowBet};
  padding: 1.5em 0;
`;

export const Mid = styled.div`
  ${flexRowBet};
  width: 60%;
  justify-content: center;
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
    background: #10377c;
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

export const PopUp = styled.div`
  position: absolute;
  transform: translateY(30px);
  width: 200px;
  background: white;
  height: 200px;
  visibility: ${props => (props.isOpen ? 'visible ' : 'hidden')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
  border: 1px solid #00d9ff;
  z-index: 100;
  transition: all 0.2s ease;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  p {
    font-size: 13px;
    font-family: inherit;
    padding-bottom: 20px;
  }
  div:nth-of-type(1) {
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
  }
  div:nth-of-type(2) {
    font-size: 13px;
    font-family: inherit;
    padding-top: 10px;
    button {
      width: auto;
      background: transparent;
      color: #004ea8;
      font-weight: 600;
      height: auto;
      outline: none;
      :hover {
        color: #004fff;
      }
    }
  }
  button {
    background: #004fff;
    width: 100%;
    height: 40px;
    color: white;
    font-family: inherit;
  }
`;

//Finished

// nav Main
// or F79824 or  FDCA40
export const Nav = styled.nav`
  width: 100%;
  height: auto;
  background: ${shade(0, '#fff')};
`;
export const NavBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const NavUl = styled.ul`
  width: 70%;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLi = styled.li`
  a {
    font-family: 'Poppins', sans-serif;
    font-size: 0.8em;
    text-decoration: none;
    letter-spacing: 1px;
    display: block;
    color: rgba(0, 0, 0, 0.6);
    padding: 16px 20px;
    font-weight: 400;
    line-height: 24px;
    :hover {
      color: #cdcdcd;
      transition-duration: 0.5s;
      transition-property: background-color, color;
    }
  }
`;
export const WrapLogo = styled.div`
  width: 20%;
  img {
    height: 40px;
  }
`;
