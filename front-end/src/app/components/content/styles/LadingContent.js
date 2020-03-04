import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/core';
import { py64, py128, mxw80 } from 'app/globals/global_styles';
import img from 'assets/images/redeEsgotoNews.jpg';
export const Container = styled.div`
  ${mxw80}
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const HeaderKeyFrame = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;
export const CarouselWrap = styled.div`
  padding-top: 30px;
  width: 90% !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 50vh;
  margin-left: auto !important;
  margin-right: auto !important;
  & .slider_left,
  .slider_right {
    max-height: 50vh;
    padding: 0 20px;
    max-width: 25%;
    background: hotpink;
    & .slick-slide {
      height: 25% !important;
      div:nth-of-type(1) {
        height: 100%;
      }
    }
  }
  & .slider_center {
    max-height: 50vh;
    background: red;
    max-width: 50%;
  }
  & .slick-active {
    button {
      ::before {
        opacity: 1 !important;
        font-size: 0.6rem;
      }
    }
  }
  & .slick-list,
  .slick-track {
    height: 100% !important;
  }
  & .slick-dots {
    bottom: 0;
    li {
      button {
        color: white !important;
        ::before {
          color: white !important;
        }
      }
    }
  }
  & .testing2,
  .testing3 {
    height: 100% !important;
    background: red;
  }
  & .testing {
    width: 50%;
    height: 50vh;
    display: flex !important;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url(${img});
    background-size: cover;
    background-position: center;
    -webkit-box-shadow: inset -200px -200px 5px 500px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: inset -200px -200px 5px 500px rgba(0, 0, 0, 0.2);
    box-shadow: inset -200px -200px 5px 500px rgba(0, 0, 0, 0.2);
    ${py128}
    h3 {
      max-width: 35rem;
      width: 90% !important;
      margin-left: auto !important;
      margin-right: auto !important;
      font-size: 2rem !important;
      color: white;
      text-align: center;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      text-shadow: 2px 2px 2px #000000;
    }
    & .text-title {
      border-radius: 5px;
      font-family: inherit;
      font-size: 0.8rem;
      font-weight: 500;
      text-transform: uppercase;
      padding: 3px 7px;
      max-width: 150px;
      line-height: 13px;
      pointer-events: auto;
      background-position: top center;
      background: linear-gradient(-45deg, #009ffd, #2a2a72);
      animation: ${HeaderKeyFrame} 5s ease infinite;
      background-size: 150% 100%;
      color: #fff;
    }
    p {
      max-width: 40rem;
      width: 90% !important;
      font-size: 1rem !important;
      color: white;
      text-align: center;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      text-shadow: 1px 1px 1px #000000;
      span {
        margin-right: 10px;
      }
    }
  }
`;
