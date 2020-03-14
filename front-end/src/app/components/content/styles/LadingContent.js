import styled from '@emotion/styled/macro';
// import { keyframes } from '@emotion/core';
import { py64, mxw80 } from 'app/globals/global_styles';
import img from 'assets/images/redeEsgotoNews.jpg';
import test from 'assets/images/regulacao.png';
import test2 from 'assets/images/sustentabilidade.png';
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

/* Header Carousel Section */
export const CarouselWrap = styled.div`
  width: 100%;

  & .slick-dots {
    bottom: 10%;
    li{
      button{
        ::before {
          opacity:1 !important;
          font-size: 0.5rem !important;
          color: rgba(0,0,0,.2)!important;
        }
      }
    }
      & .slick-active{
        button{
          ::before {
            opacity:1 !important;
            font-size: 0.8rem !important;
            color: #0079FD !important;
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
  & .slider_digital {
    padding: 0px 10px;
  }
  & .card_services {
    display: flex !important;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    h3 {
      display:flex
      justify-content:flex-end;
      font-family: 'Poppins', sans-serif;
      font-size: 15px;
      font-weight: 400;
      outline: none;
      color: #004fff;
    }
    & .digitalservices_bg {
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
  padding:64px 0;
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
    padding-bottom:20px;
    & .slider_card {
      position: relative;
      border-right: 15px solid #fff;
      padding: 0px 2px;
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
        transform: translateX(5px) translateY(-20px);
        box-shadow: 0 2px 2px rgba(0,0,0,0.19), 0 2px 2px rgba(0,0,0,0.23);
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
/* News Section */

/* Gallery Section */
export const GallerySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  outline: none;
  background: #004fff;
  position: relative;
  padding: 128px 0;
  clip-path: polygon(0 0, 100% 2vw, 100% calc(100% - 2vw), 0 100%);
  & .title{
    display: flex,
    align-items: center;
    padding-bottom: 20px;
  }
  h3 {
    padding-left: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-weight: 700;
    outline: none;
    color: #fff;
  }
  & .bg {
    height: 100%;
    border: 1px solid white;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  & .grid_gallery {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
  }
  & .description {
    padding: 0 10px;
    color: white;
    border-left: 2px solid #fff;
  }
  & .gallery_item:nth-last-of-type(-n + 3) {
    grid-column: span 2;
  }
  & .gallery_item:nth-of-type(1),
  & .gallery_item:nth-of-type(2),
  & .gallery_item:nth-of-type(3) {
    grid-column: span 2;
  }
  & .gallery_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
/* Gallery Section */

/* Licitação Section */
export const BiddingProcess = styled.div`
  width: 100%;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items:center;
  position: relative;
  & .allbidding{
    margin-top:20px;
    max-width:200px;
    padding:10px 10px;
    display:flex !important;
    justify-content:center;
    background:#004FFF;
    color:white;
    font-family: 'Poppins', sans-serif;
  }
  & .moreinfos{
    button{
      width:100px;
      display:flex !important;
      justify-content:center;
      background:#004FFF;
      padding:10px 0px;
      color:white;
      font-family: 'Poppins', sans-serif;
    }
    p {
      font-size:12px;
      display:flex !important;
      margin:0 !important;
    }
  }
  & .description{
    padding:20px 40px;
    width:auto;
    display:flex;
    h3{
      max-width:50%;
      text-align:left;
      color:#004EA8;
      font-size:18px;
    }
    p{
      max-width:70%;
      text-align:left;
      color:#004EA8;
      font-size:18px;
    }
  }
  & .date{
    display:flex;
    flex-direction:column;
    background:#004FFF;
    padding:10px 40px;
    h3{
      font-size:30px;
      font-weight:700;
      color:white;
    }
    p{
      color:white;
    }
  }
  & .row_item{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:10px 0;
    :hover{
      background: #F6FBFD;
    }
  }
  & .row{
    display: flex;
    flex-direction: column;
    border-left:4px solid #004EA8;
  }
  & .title{
    display: flex,
    align-items: flex-start;
    align-self: flex-start;
    padding-bottom: 20px;
  }
  h3 {
    padding-left: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-weight: 700;
    outline: none;
    color: #004fff;
  }
`;
/* Licitação Section */

/* TeamPreview Section */
export const TeamEmasa = styled.div`
  padding: 128px 0;
  -webkit-clip-path: polygon(0 0, 100% 2vw, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 2vw, 100% 100%, 0 100%);
  background: #E1ECF4;
  & .slick-slide > div {
    padding: 0 0.5rem;
  }
  & .title{
    display: flex,
    align-items: flex-start;
    align-self: flex-start;
    padding-bottom: 20px;
  }
  h3 {
    padding-left: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-weight: 700;
    outline: none;
    color: #004fff;
  }
`;
export const TeamCard = styled.div`
  padding: 10px 0;
  & .bg {
    padding: 100px 50px;
    background-image: url(${({ bg }) => bg});
    background-size: cover;
    background-position: center;
  }
  & .name {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 700;
    outline: none;
    color: #004fff;
  }
  & .office {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    outline: none;
    color: #004fff;
  }
  & .description {
    padding: 15px 0;
  }
`;
/* TeamPreview Section */
