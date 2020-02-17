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
  height:130px;
`;

export const Nav = styled.nav`
  ${flexAlignCenter}
  height: 50%;
  & > ul {
    ${flexAlignCenter}
  }
  & > ul > li {
    margin-right: 20px;
  }
`;

export const HeaderTop = styled.div`
  height: 50%;
  background: blue;
  ${flexCenter}
`;
