import styled from '@emotion/styled/macro';
import { keyframes, css } from '@emotion/core';
import { mxw80, flexRowBet } from '../../../globals/global_styles';
// border-bottom: 1px solid rgba(255, 255, 255, 0.2);
import { shade } from 'polished';

const DropDownHeight = keyframes`
from { 
  height:0;
  opacity:0;
}
to   { 
  height:auto;
  opacity:1;
}
`;

const DropDownItemKey = keyframes`
from { 

  opacity:0;
}
to   { 
  opacity:1;
}
`;

const KeySearch = keyframes`
from { 
  z-index:2;
  visibility: visible; 
  transform: translateY(0); 
  opacity: 1;
 }
to   { 
  z-index:1;
  visibility: hidden; 
  transform: translateY(20px); 
  opacity: 0; display:none;
}
`;
const KeySearch2 = keyframes`
from {
  z-index:1;
  visibility: hidden; 
  transform: translateY(20px); 
  opacity: 0; display:none;

 }
to   { 
    z-index:2;
  visibility: visible; 
  transform: translateY(0); 
  opacity: 1;
}
`;
const KeySearch3 = keyframes`
from { 
  visibility:hidden;
  transform: translateY(-20px); 
  opacity: 0;
  z-index:1;
}
to   { 
  visibility:visible;
  transform: translateY(0px); 
  opacity: 1; 
  z-index:2;
}
`;
const KeySearch4 = keyframes`
from { 
  visibility:visible;
  transform: translateY(0px); 
  opacity: 1; 
  z-index:2;
}
to   { 
  visibility:hidden;
  transform: translateY(-20px); 
  opacity: 0;
  z-index:1;
}
`;
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
  background: #004ea8;
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
  button {
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

export const PopUp = styled.div`
  position: absolute;
  transform: translateY(34px);
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
//dropdown
export const DropDown = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  top: 100%;
  right: auto !important;
  background-color: white;
  font-weight: 400;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-top: 2px solid #0043d8;
  z-index: 1;
  :before {
    content: '';
    display: block;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 10px solid #0043d8;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`;
export const DropDownItem = styled.li`
  padding: 8px 30px;
  border-bottom: 1px solid #e5e5e5;
  :hover {
    background-color: #e5e5e5;
    color: white;
  }
  :last-nth-of-type {
    border-bottom: none;
  }
  a {
    width: auto;
    white-space: nowrap;
    flex-direction: row;
    font-family: 'Poppins', sans-serif;
    font-size: 0.8em;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 1px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    :hover {
      color: #cdcdcd;
      transition-duration: 0.5s;
      transition-property: background-color, color;
    }
  }
`;

// nav Main
// or F79824 or  FDCA40
export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background: ${shade(0, '#fff')};
  position: relative;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.08) !important;
  z-index: 2;
`;
export const NavBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const NavGrid = styled.div`
  display: grid;
  width: 70%;
  height: 100%;
`;
export const NavUl = styled.ul`
  z-index: 2;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;
  ${props => {
    if (props.isOpen === true) {
      return css`
        animation: ${KeySearch} 0.5s;
        -webkit-animation-fill-mode: forwards;
        -moz-animation-fill-mode: forwards;
        -ms-animation-fill-mode: forwards;
        -o-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
      `;
    }
    if (props.isOpen === false) {
      return css`
        animation: ${KeySearch2} 0.5s;
        -webkit-animation-fill-mode: forwards;
        -moz-animation-fill-mode: forwards;
        -ms-animation-fill-mode: forwards;
        -o-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
      `;
    }
  }}
  svg {
    cursor: pointer;
    margin-left: 10px;
  }
`;
export const NavLi = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  & .active {
    font-family: 'Poppins', sans-serif;
    font-size: 0.8em;
    font-weight: bold;
    text-decoration: none;
    text-transform:uppercase; 
    letter-spacing: 1px;
    display: inline-block;
    position: relative;
    color: rgba(0, 0, 0, 0.6);
    padding: 0px 12px;
    line-height: 24px;
    color:#004EA8;
    ::after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: '';
      left: 50%;
      transform: translateX(-50%);
      display: block;
      height: 2px;
      position: absolute;
      background: #004fff;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 50%;
    }
    :hover{
      color: #004fff;
    }
    }
  }
  & .notactive {
    font-family: 'Poppins', sans-serif;
    font-size: 0.8em;
    font-weight: bold;
    text-decoration: none;
    text-transform:uppercase; 
    letter-spacing: 1px;
    display: inline-block;
    position: relative;
    color: rgba(0, 0, 0, 0.6);
    padding: 0px 12px;
    line-height: 24px;
    ::after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: '';
      display: block;
      height: 2px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      background: #004fff;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    :hover {
      color: #cdcdcd;
      transition-duration: 0.5s;
      transition-property: background-color, color;
    }
    :hover:after {
      width: 50%;
      left: 50%;
      transition-duration: 0.5s;
      transition-property: width;
    }
  }
`;
export const WrapLogo = styled.div`
  width: 30%;
  img {
    height: 40px;
  }
`;

export const SearchWrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  visibility: hidden;
  opacity: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  ${props => {
    if (props.isOpen === true) {
      return css`
        animation: ${KeySearch3} 0.5s;
        -webkit-animation-fill-mode: forwards;
        -moz-animation-fill-mode: forwards;
        -ms-animation-fill-mode: forwards;
        -o-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
      `;
    }
    if (props.isOpen === false) {
      return css`
        animation: ${KeySearch4} 0.5s;
        -webkit-animation-fill-mode: forwards;
        -moz-animation-fill-mode: forwards;
        -ms-animation-fill-mode: forwards;
        -o-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
      `;
    }
  }}
  & .FlexInput {
    width: 100%;
    display: inline-flex;
    align-items: center;
    height: 100%;
    background: transparent;
    transition: all 0.4s;
    input {
      background: transparent;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0.5rem 0.8rem 0.5rem 1.2rem;
      outline: none;
      font-size: 14px;
      font-weight: 400;
      color: #a9a9a9;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: initial;
      font-family: 'Poppins', sans-serif;
    }
  }
  & .IconContainer {
    display: flex;
    align-items: center;
    padding: 10px 0;
    width: 30px;
    cursor: pointer;
    :hover {
      color: white;
    }
  }
`;
