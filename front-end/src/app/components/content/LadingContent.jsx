import React from 'react';
import { Content, CarouselWrap } from './styles/LadingContent';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
const CarouselHeader = props => {
  var slider_left = {
    className: 'slider_left',
    dots: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  var slider_center = {
    className: 'slider_center',
    dots: true,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var slider_right = {
    className: 'slider_right',
    dots: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <CarouselWrap>
      <Slider {...slider_left}>
        <div className="testing2">
          <div>
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
        </div>
        <div className="testing2">a</div>
        <div className="testing2">a</div>
      </Slider>
      <Slider {...slider_center}>
        <div className="testing">
          <div>
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
        </div>
        <div className="testing">a</div>
        <div className="testing">a</div>
      </Slider>
      <Slider {...slider_right}>
        <div className="testing3">
          <div style={{ background: 'red' }}>
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
        </div>
        <div className="testing3">a</div>
        <div className="testing3">a</div>
        <div className="testing3">a</div>
        <div className="testing3">a</div>
        <div className="testing3">a</div>
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
