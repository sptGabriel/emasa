import styled from '@emotion/styled/macro';
import { mxw80, flex, flexAlignCenter } from '../../../globals/flex';

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
export const SearchContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: 33.3333%;
  border-radius: 25px;
  overflow: hidden;
  height: 50px;
  border: 0;
  background: ${props => props.theme.navbar.background.search};
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.07);
  transition: all 0.4s;
  margin-right: 20px;
  ${IconContainer} {
    ${flexAlignCenter}
    width: 50px;
    padding: 0.5rem 1.3rem;
    height: 100%;
    & > svg {
      font-size: 1.3em;
      color: ${props => props.theme.colors.primary};
    }
  }
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
      color: ${props => props.theme.colors.primary};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: initial;
      font-family: Roboto, Arial, sans-serif;
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
  & > a > img {
    margin-right: 30px;
  }
`;
export const Accessibility = styled.nav`
  width: 33.3333%;
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
    color: #000;
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
  background: ${props => props.theme.navbar.background.topbar};
  box-shadow: 0 0 5px rgba(18, 23, 39, 0.2);
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
