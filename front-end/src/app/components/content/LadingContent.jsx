import React from 'react';
import {
  Content,
  Container,
  CarouselWrap,
  SlideBg,
  SlideDescription,
  DigitalServices,
  NewsSection,
  GallerySection,
  FirstWrap,
  SliderGallery,
  BiddingProcess,
} from './styles/LadingContent';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNewspaper,
  faAngleRight,
  faGavel,
} from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import segunda from 'assets/images/2via.png';
import img1 from 'assets/images/img1.png';
import img2 from 'assets/images/img2.png';
import img3 from 'assets/images/img3.png';

const Bidding = props => {
  return (
    <Container>
      <BiddingProcess>
        <div className="title">
          <FontAwesomeIcon
            className="adjust"
            icon={faGavel}
            size="2x"
            fixedWidth
            color="#004EA8"
          />
          <h3>Licitações</h3>
        </div>
      </BiddingProcess>
    </Container>
  );
};

const GalleryPictures = props => {
  return (
    <GallerySection>
      <Container>
        <div className="title">
          <FontAwesomeIcon
            className="adjust"
            icon={faImages}
            size="2x"
            fixedWidth
            color="#fff"
          />
          <h3>Galeria de Fotos</h3>
        </div>
        <div className="grid_gallery">
          <div class="gallery_item">
            <div className="bg">
              <img src="https://tomribeiro.blog.br/assets/2018/03/650x375_centro-de-tratamento-da-embasa-em-itabuna_1649597.jpg"></img>
            </div>
          </div>
          <div class="gallery_item">
            <div className="bg">
              <img src="https://lh3.googleusercontent.com/proxy/ilwyEYX_5iNzbkVr9qGAffFNgNgWEJme0eQUFC0uqR0hbHRI2e0LGlZNUbbglRtJjwvY7JjXPgOVqRnp1OfiAbt0pAqdcBnEqU6Lx-ds3-9W03UnnH0f6NpfZ8RSxBfbtY5KD8FbOvLs3N6VozPPSQX3fQTpg8nk2B8s0R4HY95I_JI"></img>
            </div>
          </div>
          <div class="gallery_item">
            <div className="bg">
              <img src="https://www.emasaitabuna.com.br/wp-content/uploads/2018/10/emasa-EO.jpg"></img>
            </div>
          </div>
          <div class="gallery_item">
            <div className="bg">
              <img src="https://www.emasaitabuna.com.br/wp-content/uploads/2018/10/emasa-EO.jpg"></img>
            </div>
          </div>
          <div class="gallery_item">
            <div className="bg">
              <img src="https://www.emasaitabuna.com.br/wp-content/uploads/2018/10/emasa-EO.jpg"></img>
            </div>
          </div>
          <div class="gallery_item">
            <div className="bg">
              <img src="https://lh3.googleusercontent.com/proxy/ilwyEYX_5iNzbkVr9qGAffFNgNgWEJme0eQUFC0uqR0hbHRI2e0LGlZNUbbglRtJjwvY7JjXPgOVqRnp1OfiAbt0pAqdcBnEqU6Lx-ds3-9W03UnnH0f6NpfZ8RSxBfbtY5KD8FbOvLs3N6VozPPSQX3fQTpg8nk2B8s0R4HY95I_JI"></img>
            </div>
          </div>
          <div class="gallery_item">
            <div className="bg">
              <img src="https://lh3.googleusercontent.com/proxy/ilwyEYX_5iNzbkVr9qGAffFNgNgWEJme0eQUFC0uqR0hbHRI2e0LGlZNUbbglRtJjwvY7JjXPgOVqRnp1OfiAbt0pAqdcBnEqU6Lx-ds3-9W03UnnH0f6NpfZ8RSxBfbtY5KD8FbOvLs3N6VozPPSQX3fQTpg8nk2B8s0R4HY95I_JI"></img>
            </div>
          </div>
          <div class="gallery_item">
            <div className="bg">
              <img src="https://www.emasaitabuna.com.br/wp-content/uploads/2018/10/emasa-EO.jpg"></img>
            </div>
          </div>
          <div class="gallery_item">
            <div className="bg">
              <img src="https://www.emasaitabuna.com.br/wp-content/uploads/2018/10/emasa-EO.jpg"></img>
            </div>
          </div>
          <div class="gallery_item">
            <div class="description">
              <p>ESTAÇÃO DE TRATAMENTO - ETA</p>
            </div>
          </div>
          <div class="gallery_item">
            <div class="description">
              <p>ESTAÇÃO DE TRATAMENTO DE ESGOTO - ETE</p>
            </div>
          </div>
          <div class="gallery_item">
            <div class="description">
              <p>ESTAÇÃO DE TRATAMENTO DE ESGOTO - ETE</p>
            </div>
          </div>
        </div>
      </Container>
    </GallerySection>
  );
};

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
    autoplay: false,
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
      <GalleryPictures />
      <Bidding />
    </>
  );
};

export default LadingContent;
