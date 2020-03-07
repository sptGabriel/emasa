import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/core';
import { py64, py128, mxw80 } from 'app/globals/global_styles';
import img from 'assets/images/redeEsgotoNews.jpg';
import test from 'assets/images/regulacao.png';
import test2 from 'assets/images/sustentabilidade.png';
import test3 from 'assets/images/qualidade.png';
export const Container = styled.div`
  ${mxw80}
  position:relative;
  height: auto;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
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

/* Header Carousel Section */
export const CarouselWrap = styled.div`
  width: 100%;
  & .slick-active {
    button {
      ::before {
        opacity: 1 !important;
        font-size: 0.6rem;
      }
    }
  }
  & .slick-dots {
    bottom: 15%;
    li {
      button {
        color: white !important;
        ::before {
          color: white !important;
        }
      }
    }
  }
  & .testing {
    height:400px;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-image: url(${test});
    }
  }
`;

export const SlideBg = styled.div`
  height: 400px;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-image: url(${test2});
  ${py64}
  p {
    max-width: 400px;
    font-size: 1.4rem !important;
    color: #0086ff;
    text-align: center;
    font-family: 'Poppins', sans-serif;
  }
`;
export const SlideDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  max-width: 80rem !important;
  width: 80rem !important;
  p {
    max-width: 400px;
    font-size: 1.4rem !important;
    color: #0086ff;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 10px;
    strong {
      color: #004ea8;
    }
  }

  button {
    max-width: 200px;
    padding: 10px;
    border-radius: 25px;
    font-size: 1rem !important;
    color: #fff;
    background: #0043d8;
    text-align: center;
    font-family: 'Poppins', sans-serif;
  }
`;
/* Header Carousel Section */
/* Digital Services Section */

export const DigitalServices = styled.div`
  background: white;
  width: 100%;
  position: relative;
  transform: translateY(-35%);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175) !important;
  border-radius: 0.25rem !important;
  & .slick-dots {
    bottom: 0;
  }
  & .slider_digital {
    padding: 15px 20px;
  }
  & .card_services {
    display: flex !important;
    align-items: center;
    flex-direction: row;
    h3 {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      font-family: 'Poppins', sans-serif;
      font-size: 15px;
      font-weight: 400;
      outline: none;
      color: #004fff;
    }
    & .digitalservices_bg {
      display: flex;
      justify-content: flex-end;
      img {
      }
    }
  }
`;

export const RowServices = styled.div``;

/* Digital Services Section */
/* News Section */
export const NewsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  outline:none;
  padding-bottom:64px;
  & .news_emasa {
    display: flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-weight: 700;
    padding-bottom: 20px;
    outline:none;
    color: #004fff;
    h3 {
      padding: 0 15px;
    }
  }
  & .more_news {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
    cursor:pointer;
    p {
      padding: 0 2px;
      font-weight: bold;
      font-family: 'Poppins', sans-serif;
      color: #004fff;
    }
  }
  & .news_slider {
    & .slider_card {
      position: relative;
        
      padding: 10px 10px;
      cursor:pointer;
      & .card_bg {
        width: 100%;
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        background-image: url(${img});
        padding 100px 0;
      }
      & .card_category {
        position: absolute;
        transform: translateY(-50%);
        padding: 0 30px;
        z-index: 2;
        p {
          padding: 5px 10px;
          background: #004fff;
          border-radius:5px;
          color:white;
        }
      }
      & .card_content {
        position: relative;
        background: #fff;
        height: 150px;
        padding: 0px 0px;
        transform: translateX(10px) translateY(-20px);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        :hover {
          transform: translateX(0px);
        }
        & .title {
          background: green;
        }
      }
    }
  }
`;
