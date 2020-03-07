import React from 'react';
import {
  Content,
  Container,
  CarouselWrap,
  SlideBg,
  SlideDescription,
  DigitalServices,
  NewsSection,
} from './styles/LadingContent';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import segunda from 'assets/images/2via.png';
const News = props => {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    draggable: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <NewsSection>
        <div className="news_emasa">
          <FontAwesomeIcon
            className="adjust"
            icon={faNewspaper}
            size="1x"
            fixedWidth
            color="#004ea8"
          />
          <h3>ÚLTIMAS NOTÍCIAS</h3>
        </div>
        <div className="news_slider">
          <Slider {...settings}>
            <div className="slider_card">
              <div className="card_bg"></div>

              <div className="card_content">
                <div className="card_category">
                  <p>Emasa Em Ação</p>
                </div>
              </div>
            </div>
            <div className="slider_card">
              <div className="card_bg"></div>

              <div className="card_content">
                <div className="card_category">
                  <p>Emasa Em Ação</p>
                </div>
              </div>
            </div>
            <div className="slider_card">
              <div className="card_bg"></div>

              <div className="card_content">
                <div className="card_category">
                  <p>Emasa Em Ação</p>
                </div>
              </div>
            </div>
            <div className="slider_card">
              <div className="card_bg"></div>

              <div className="card_content">
                <div className="card_category">
                  <p>Emasa Em Ação</p>
                </div>
              </div>
            </div>
            <div className="slider_card">
              <div className="card_bg"></div>

              <div className="card_content">
                <div className="card_category">
                  <p>Emasa Em Ação</p>
                </div>
              </div>
            </div>
            <div className="slider_card">
              <div className="card_bg"></div>

              <div className="card_content">
                <div className="card_category">
                  <p>Emasa Em Ação</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="more_news">
          <p>Ver Mais</p>
          <FontAwesomeIcon
            className="adjust"
            icon={faAngleRight}
            size="1x"
            fixedWidth
            color="#004fff"
          />
        </div>
      </NewsSection>
    </Container>
  );
};

const Services = props => {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    draggable: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <DigitalServices background={segunda}>
        <Slider {...settings}>
          <div className="slider_digital">
            <div className="card_services">
              <div className="digitalservices_bg">
                <img src={segunda} />
              </div>
              <h3>Segunda Via de Conta</h3>
            </div>
          </div>
          <div className="slider_digital">
            <div className="card_services">
              <div className="digitalservices_bg">
                <img src={segunda} />
              </div>
              <h3>Segunda Via de Conta</h3>
            </div>
          </div>
          <div className="slider_digital">
            <div className="card_services">
              <div className="digitalservices_bg">
                <img src={segunda} />
              </div>
              <h3>Segunda Via de Conta</h3>
            </div>
          </div>
          <div className="slider_digital">
            <div className="card_services">
              <div className="digitalservices_bg">
                <img src={segunda} />
              </div>
              <h3>Segunda Via de Conta</h3>
            </div>
          </div>
          <div className="slider_digital">
            <div className="card_services">
              <div className="digitalservices_bg">
                <img src={segunda} />
              </div>
              <h3>Segunda Via de Conta</h3>
            </div>
          </div>
          <div className="slider_digital">
            <div className="card_services">
              <div className="digitalservices_bg">
                <img src={segunda} />
              </div>
              <h3>Segunda Via de Conta</h3>
            </div>
          </div>
        </Slider>
      </DigitalServices>
    </Container>
  );
};

const CarouselHeader = props => {
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    draggable: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <CarouselWrap>
      <Slider {...settings}>
        <SlideBg>
          <SlideDescription>
            <p>
              ASSUMIMOS UM
              <strong> COMPROMISSO</strong>
              <strong> SOCIO AMBIENTAL </strong>
              COM TODAS AS COMUNIDADES ONDE ESTAMOS PRESENTES.
            </p>
            <button>Veja Mais</button>
          </SlideDescription>
        </SlideBg>
        <SlideBg>a</SlideBg>
        <SlideBg>a</SlideBg>
      </Slider>
    </CarouselWrap>
  );
};
const LadingContent = props => {
  return (
    <>
      <CarouselHeader />
      <Services />
      <News />
    </>
  );
};

export default LadingContent;
