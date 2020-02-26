import styled from '@emotion/styled/macro';
import { mxw80, flex, flexAlignCenter } from '../../../globals/global_styles';

// box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 7px 0 rgba(0, 0, 0, 0.1),
// 0 3px 1px -1px rgba(0, 0, 0, 0.2); 2a2d34

const sizeCheck = (font, multiply) => {
  switch (multiply) {
    case 1:
      return `font-size: ${font * multiply}px;`;
    case 2:
      return `font-size: ${font + multiply * 4}px;`;
    case 3:
      return `font-size: ${font + multiply * 4}px;`;
    case 4:
      return `font-size: ${font + multiply * 4}px;`;
    default:
      return `font-size: ${font}`;
  }
};

export const Content = styled.div`
  ${mxw80}
  ${flex}
`;

export const Nav = styled.nav`
  height: auto;
  ${flexAlignCenter}
  & > ul {
    ${flexAlignCenter}
    width:100%;
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
  }
  & > ul > li {
    padding: 1em 0.5em 1.05em;
  }
  & > ul > li > a {
    margin: 0 2px;
    padding: 0 8px;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    ${props => sizeCheck(15, props.multiplyFont)};
    color: ${props => props.theme.colors.nav};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: initial;
    font-family: Roboto, Arial, sans-serif;
  }
`;

export const IconContainer = styled.div``;
export const SearchContainer = styled.div``;
export const MidContainer = styled.div`
  width: 50%;
  display: flex;
  ${SearchContainer} {
    width: 60%;
    display: inline-flex;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    border: 0;
    background: white;
    box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.04);
    transition: all 0.4s;
    margin-right: 10px;
    & > input {
      background: transparent;
      width: calc(100% - 50px);
      height: 100%;
      border: 0;
      padding: 0.5rem 0.5rem 0.5rem 0.5rem;
      outline: none;
      color: ${props => props.theme.colors.primary};
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: initial;
      font-family: Roboto, Arial, sans-serif;
      ::placeholder {
        font-size: 16px;
        color: #004ea8;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: initial;
        font-family: Roboto, Arial, sans-serif;
      }
    }
  }
  ${IconContainer} {
    ${flexAlignCenter}
    width: 20px;
    height: 100%;
    & > svg {
      font-size: 1em;
      color: #0086ff;
    }
  }
`;
export const ImgWrap = styled.div`
  width: 33.3333%;
  display: flex;
  align-items: center;
  & > a {
    display: flex;
    align-items: center;
    width: 100%;
    color: #000;
    font-family: 'Yanone Kaffeesatz';
    font-weight: 400;
    letter-spacing: 2px;

    font-size: 2em;
  }
  h3 {
    color: white;
    font-size: 1.5em;
    text-transform: uppercase;
  }
  & > img {
    width: 80px;
    margin-right: 20px;
  }
`;
export const SignWrap = styled.div`
  background: green;
  position: absolute;
  width: 220px;
  height: 250px;
  top: 58px;
  :before {
    content: '';
    display: block;
    position: absolute;
    right: 1rem;
    top: -15px;
    border-bottom: 15px solid #fff;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
  }
`;
export const LoginColumn = styled.div`
  position: relative;
  width: 220px;
  display: flex;
  flex-direction: column;
  background: hotpink;
`;
export const DropDownWrap = styled.div``;
export const LoginIconWrap = styled.div``;
export const WrapperLogin = styled.div`
  height: 100%;
  position: relative;
  width: 220px;
  display: flex;
  align-items: center;

  background: red;
  ${DropDownWrap} {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
    background: hotpink;
    a {
      position: absolute;
      background: black;
      right: 1rem;
      color: white;
      font-family: Roboto;
      font-size: 0.8em;
    }
  }
  ${LoginIconWrap} {
    height: 100%;
    display: flex;
    justify-content: center;
    background: green;
  }
  :hover {
  }
`;
export const Accessibility = styled.nav`
  width: 20%;
  height: 100%;
  & > ul {
    ${flexAlignCenter}
    width:100%;
    flex-wrap: wrap;
    height: auto;
    justify-content: flex-end;
  }
  & > ul > li {
    position: relative;
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    line-height: 24px;
    color: #fff;
    user-select: none;
  }

  & > ul > li:nth-of-type(2) {
    ${props => {
      if (props.multiplyFont === 1) {
        return `
        opacity: 0.5;
        font-style: italic;
      `;
      } else {
        return `
        opacity: 1;
        cursor:pointer;
        pointer-events: auto;
        font-style: normal;
      `;
      }
    }}
    font-size: 18px;
    font-weight: 700;
    padding: 0 9px;
  }
  & > ul > li:nth-of-type(3) {
    ${props => {
      if (props.multiplyFont === 4) {
        return `
        opacity: 0.5;
        font-style: italic;
      `;
      } else {
        return `
        opacity: 1;
        cursor:pointer;
        pointer-events: auto;
        font-style: normal;
      `;
      }
    }}
    font-size: 18px;
    font-weight: 700;
    font-size: 18px;
    font-weight: 700;
    padding: 0 9px;
  }
  & > ul > li > a {
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    line-height: 24px;
  }
  & > ul > li > a > p {
    position: relative;
    display: inline-block;
    pointer-events: none;
    padding: 0 9px;
  }
`;

export const HeaderTop = styled.div`
  ${mxw80}
  padding-bottom: 10px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`;

export const ContainerTop = styled.div`
  position: relative;
  width: 100%;
  max-height: 100px;
  background: ${props => props.theme.navbar.background.topbar};
`;

export const ContainerNav = styled.div`
  width: 100%;
  background: ${props => props.theme.navbar.background.navmain};
  height: auto;
  flex-wrap: wrap;
  box-shadow: 0 0 5px rgba(18, 23, 39, 0.4);
`;

export const Container = styled.div`
  width: 100%;
`;
