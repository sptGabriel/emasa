import React from 'react';
import {
  Content,
  CarouselWrap,
  SlideBg,
  SlideDescription,
} from './styles/LadingContent';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import test from 'assets/images/regulacao.png';
import test2 from 'assets/images/sustentabilidade.png';
import test3 from 'assets/images/qualidade.png';
const CarouselHeader = props => {
  var settings = {
    dots: true,
    arrows: false,
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
    <Content>
      <CarouselHeader />
    </Content>
  );
};

export default LadingContent;
