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
    background-image: url(${test2});
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

export const DigitalServices = styled.div`
  background: white;
  width: 100%;
  padding: 35px 0;
  position: relative;
  transform: translateY(-35%);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175) !important;
  border-radius: 0.25rem !important;
`;

export const RowServices = styled.div``;
