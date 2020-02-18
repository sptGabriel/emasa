import styled from '@emotion/styled';
import { flexCenter, mxw80, flex, flexAlignCenter } from '../../globals/flex';

// box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 7px 0 rgba(0, 0, 0, 0.1),
// 0 3px 1px -1px rgba(0, 0, 0, 0.2);

export const Container = styled.div`
  width: 100%;
  height: 130px;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  ${mxw80}
  ${flex}
`;

export const Nav = styled.nav`
  height: 100%;
  ${flexAlignCenter}
  & > ul {
    ${flexAlignCenter}
  }
  & > ul > li {
    margin-right: 20px;
  }
`;

export const IconContainer = styled.div``;
export const SearchContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: 350px;
  border-radius: 25px;
  overflow: hidden;
  height: 50px;
  border: 0;
  background: rgba(0, 0, 0, 0.1) !important;
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.07);
  transition: all 0.4s;
  margin-right: 20px;
  & > div:nth-child(1) {
    ${flexAlignCenter}
    width: 50px;
    padding: 0.5rem 1.3rem;
    height: 100%;
    & > svg {
      font-size: 1.3em;
    }
  }
  & > input {
    background: transparent;
    width: calc(100% - 50px);
    height: 100%;
    border: 0;
    padding: 0.5rem 0.5rem 0.5rem 0;
    outline: none;
  }
`;

export const Accessibility = styled.div`
  ${flex}
  width:200px;
  align-items: center;
  & > h3 {
    margin-right: 6px;
  }
  & > svg {
    cursor: pointer;
    font-size: 1em;
  }
  & > svg:nth-child(2) {
    margin-right: 5px;
  }
`;

export const AccessibilityTwo = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100px;
  border-radius: 25px;
  overflow: hidden;
  height: 50px;
  justify-content: center;
  & > h3 {
    color: white;
    margin-right: 5px;
  }
  & > svg {
    cursor: pointer;
  }
  & > svg:nth-child(2) {
    margin-left: 20px;
  }
`;

export const WrapperTop = styled.div`
  ${flexCenter}
  width: 100%;
  height: 65px;
  & > img {
    width: 90px;
  }
`;

export const HeaderTop = styled.div`
  ${mxw80}
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const ContainerTop = styled.div`
  position: relative;
  width: 100%;
  background: #004fff;
  box-shadow: 0 0 5px rgba(18, 23, 39, 0.2);
`;

export const ContainerNav = styled.div`
  width: 100%;
  height: 50px;
  background: #fcab10;
  color: white;
`;

export const LogoContent = styled.div`
  max-height: 65px;
  background: green;
`;
