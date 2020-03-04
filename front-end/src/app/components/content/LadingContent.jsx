import React from 'react';
import { Content, CarouselWrap } from './styles/LadingContent';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
const CarouselHeader = props => {
  var settings = {
    dots: true,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <CarouselWrap>
      <Slider {...settings}>
        <div className="testing">
          <h3>Rede adutora foi recuperada no bairro Nova Ferradas</h3>
          <p>
            <span>
              <FontAwesomeIcon
                className=""
                icon={faClock}
                size="1x"
                fixedWidth
                color="#fff"
              />
            </span>
            2 de março de 2020
          </p>
        </div>
        <div className="testing">a</div>
        <div className="testing">a</div>
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
