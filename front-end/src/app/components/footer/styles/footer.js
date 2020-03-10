import styled from '@emotion/styled/macro';
import { mxw80 } from 'app/globals/global_styles';
export const FooterTop = styled.div`
  width: 100%;
  height: auto !important;
  padding: 30px 0;
  background: #05172d;
  & .title {
    width: 100%;
    color: white;
    font-family: 'Poppins', sans-serif;
    padding-bottom: 10px;
    font-size: 700;
  }
  & .mapa {
    width: 50%;
    display: flex;
    flex-direction: column;
    background: red;
  }
  & .nav_footer {
    width: 100%;
    display: flex;
    padding: 10px 0;
    background: hotpink;
    color: white;
    font-family: sans-serif;
    flex-wrap: wrap;
    li {
      margin-right: 100px;
      padding: 10px 0;
      background: red;
    }
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  height: auto !important;
  background: #004fff;
`;
export const Container = styled.div`
  ${mxw80}
  position:relative;
  height: auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
