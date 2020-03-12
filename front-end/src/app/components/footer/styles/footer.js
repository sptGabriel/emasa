import styled from '@emotion/styled/macro';
import { mxw80 } from 'app/globals/global_styles';
export const FooterTop = styled.div`
  width: 100%;
  height: auto !important;
  padding-top: 40px;
  padding-bottom: 64px;
  background: #004ea8;
  & .ouvidoria {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 18px;
    text-align: center;
    list-style-type: none;
    h3 {
      text-align: left;
    }
  }
  & .iconBg {
    img {
      display: block !important;
      width: 100%;
    }
  }
  & .support {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .socials_icons {
    padding: 20px 0;
  }
  & .Contact {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    li {
      color: white;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 18px;
      text-align: center;
      list-style-type: none;
      cursor: pointer;
    }
    svg {
      cursor: pointer;
    }
    p {
      color: white;
      font-size: 10px;
      font-family: 'Arial';
      strong {
        text-decoration: underline;
        color: #ffc750;
        cursor: pointer;
      }
    }
  }
  & .title {
    width: 100%;
    grid-area: a;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 700;
  }
  & .grid_map {
    display: grid;
    grid-row-gap: 10px;
    width: 40%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'a a a'
      'b c d';
  }
  & .institucional {
    grid-area: b;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    h3 {
      color: white;
      font-family: 'Poppins', sans-serif;
      font-size: 700;
      font-size: 16px;
      border-left: 1px solid white;
      padding: 0 5px;
    }
    li:first-of-type {
      margin-top: 10px;
    }
  }
  & .institucional2 {
    grid-area: c;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    h3 {
      color: white;
      font-family: 'Poppins', sans-serif;
      font-size: 700;
      font-size: 16px;
      border-left: 1px solid white;
      padding: 0 5px;
    }
    li:first-of-type {
      margin-top: 10px;
    }
  }
  & .institucional3 {
    grid-area: d;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    h3 {
      color: white;
      font-family: 'Poppins', sans-serif;
      font-size: 700;
      font-size: 16px;
      border-left: 1px solid white;
      padding: 0 5px;
    }
    li:first-of-type {
      margin-top: 10px;
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
