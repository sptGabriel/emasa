import styled from '@emotion/styled';
import { flexCenter, mxw80, flex, flexAlignCenter } from '../../globals/flex';

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

export const WrapperTop = styled.div`
  ${flexCenter}
  width: 100%;
  height: 65px;
`;

export const HeaderTop = styled.div`
  ${mxw80}
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid #d8d8d8;
`;

export const ContainerTop = styled.div`
  width: 100%;
`;
export const ContainerNav = styled.div`
  width: 100%;
  height: 50px;
`;
