import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  CarouselWrap,
  SlideBg,
  SlideDescription,
  DigitalServices,
  NewsSection,
  GallerySection,
  BiddingProcess,
  TeamEmasa,
  TeamCard,
} from './styles/LadingContent';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNewspaper,
  faAngleRight,
  faGavel,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import segunda from 'assets/images/2via.png';
import avatar from 'assets/images/avatar.jpg';
import Modal from 'react-modal';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const TeamPreview = props => {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    draggable: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <TeamEmasa>
      <Container>
        <div className="title">
          <FontAwesomeIcon
            className="adjust"
            icon={faUsers}
            size="2x"
            fixedWidth
            color="#004EA8"
          />
          <h3>Equipe Emasa</h3>
        </div>
        <Slider {...settings}>
          <TeamCard bg={avatar}>
            <div className="bg"></div>
            <div className="description">
              <h3 className="name">Jader Guedes</h3>
              <h3 className="office">Diretor presidente</h3>
            </div>
          </TeamCard>
          <TeamCard bg={avatar}>
            <div className="bg"></div>
            <div className="description">
              <h3 className="name">Jader Guedes</h3>
              <h3 className="office">Diretor presidente</h3>
            </div>
          </TeamCard>
          <TeamCard bg={avatar}>
            <div className="bg"></div>
            <div className="description">
              <h3 className="name">Jader Guedes</h3>
              <h3 className="office">Diretor presidente</h3>
            </div>
          </TeamCard>
          <TeamCard bg={avatar}>
            <div className="bg"></div>
            <div className="description">
              <h3 className="name">Jader Guedes</h3>
              <h3 className="office">Diretor presidente</h3>
            </div>
          </TeamCard>
          <TeamCard bg={avatar}>
            <div className="bg"></div>
            <div className="description">
              <h3 className="name">Jader Guedes</h3>
              <h3 className="office">Diretor presidente</h3>
            </div>
          </TeamCard>
        </Slider>
      </Container>
    </TeamEmasa>
  );
};
const Bidding = props => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const targetRef = useRef();
  const targetElement = null;

  useEffect(() => (targetElement = targetRef.current), [targetElement]);

  showTargetElement = () => {
    disableBodyScroll(targetElement);
  };

  hideTargetElement = () => {
    enableBodyScroll(targetElement);
  };

  const customStyles = {
    content: {
      top: '44%',
      left: '50%',
      width: '65vw',
      height: '60vh',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0px 0px 33px 4px rgba(0, 0, 0, 0.125)',
    },
  };
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
        <div className="row">
          <div className="row_item">
            <div className="date">
              <h3>10</h3>
              <p>Março</p>
            </div>
            <div className="description">
              <h3> AQUISIÇÃO DE BOMBAS SUBMERSAS</h3>
              <p>
                Contratação de empresa para aquisição de bombas submersas para
                atender as necessidades do DEPASA nos serviços de operação dos
                sistemas de abastecimento de água. Abertura da licitação: 09/03
              </p>
            </div>
            <div className="moreinfos">
              <button>
                <p>SAIBA MAIS</p>
              </button>
            </div>
          </div>
          <div className="row_item">
            <div className="date">
              <h3>10</h3>
              <p>Março</p>
            </div>
            <div className="description">
              <h3> AQUISIÇÃO DE BOMBAS SUBMERSAS</h3>
              <p>
                Contratação de empresa para aquisição de bombas submersas para
                atender as necessidades do DEPASA nos serviços de operação dos
                sistemas de abastecimento de água. Abertura da licitação: 09/03
              </p>
            </div>
            <div className="moreinfos">
              <button onClick={openModal}>
                <p>SAIBA MAISS</p>
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldFocusAfterRender={false}
              >
                <button onClick={closeModal}>close</button>
                Modal
              </Modal>
            </div>
          </div>
          <div className="row_item">
            <div className="date">
              <h3>10</h3>
              <p>Março</p>
            </div>
            <div className="description">
              <h3> AQUISIÇÃO DE BOMBAS SUBMERSAS</h3>
              <p>
                Contratação de empresa para aquisição de bombas submersas para
                atender as necessidades do DEPASA nos serviços de operação dos
                sistemas de abastecimento de água. Abertura da licitação: 09/03
              </p>
            </div>
            <div className="moreinfos">
              <button>
                <p>SAIBA MAIS</p>
              </button>
            </div>
          </div>
        </div>
        <button className="allbidding">VEJA TODAS AS LICITAÇÕES</button>
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
          <div className="gallery_item">
            <div className="bg">
              <img
                src="https://tomribeiro.blog.br/assets/2018/03/650x375_centro-de-tratamento-da-embasa-em-itabuna_1649597.jpg"
                alt="Eta"
              />
            </div>
          </div>
          <div className="gallery_item">
            <div className="bg">
              <img
                src="https://tomribeiro.blog.br/assets/2018/03/650x375_centro-de-tratamento-da-embasa-em-itabuna_1649597.jpg"
                alt="Sede Administrativa"
              />
            </div>
          </div>
          <div className="gallery_item">
            <div className="bg">
              <img
                src="https://www.emasaitabuna.com.br/wp-content/uploads/2018/10/emasa-EO.jpg"
                alt="EO Emasa"
              />
            </div>
          </div>
          <div className="gallery_item">
            <div className="bg">
              <img
                src="https://www.emasaitabuna.com.br/wp-content/uploads/2018/10/emasa-EO.jpg"
                alt="img_01"
              />
            </div>
          </div>
          <div className="gallery_item">
            <div className="bg">
              <img
                src="https://www.emasaitabuna.com.br/wp-content/uploads/2018/10/emasa-EO.jpg"
                alt="img_01"
              />
            </div>
          </div>
          <div className="gallery_item">
            <div className="bg">
              <img
                src="https://tomribeiro.blog.br/assets/2018/03/650x375_centro-de-tratamento-da-embasa-em-itabuna_1649597.jpg"
                alt="img_01"
              />
            </div>
          </div>
          <div className="gallery_item">
            <div className="bg">
              <img
                src="https://tomribeiro.blog.br/assets/2018/03/650x375_centro-de-tratamento-da-embasa-em-itabuna_1649597.jpg"
                alt="img_01"
              />
            </div>
          </div>
          <div className="gallery_item">
            <div className="bg">
              <img
                src="https://www.emasaitabuna.com.br/wp-content/uploads/2018/10/emasa-EO.jpg"
                alt="img_01"
              />
            </div>
          </div>
          <div className="gallery_item">
            <div className="bg">
              <img
                src="https://www.emasaitabuna.com.br/wp-content/uploads/2018/10/emasa-EO.jpg"
                alt="img_01"
              />
            </div>
          </div>
          <div className="gallery_item">
            <div className="description">
              <p>ESTAÇÃO DE TRATAMENTO - ETA</p>
            </div>
          </div>
          <div className="gallery_item">
            <div className="description">
              <p>ESTAÇÃO DE TRATAMENTO DE ESGOTO - ETE</p>
            </div>
          </div>
          <div className="gallery_item">
            <div className="description">
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
                <img src={segunda} alt="Serviços Emasa" />
              </div>
              <h3>Segunda Via de Conta</h3>
            </div>
          </div>
          <div className="slider_digital">
            <div className="card_services">
              <div className="digitalservices_bg">
                <img src={segunda} alt="Serviços Emasa" />
              </div>
              <h3>Segunda Via de Conta</h3>
            </div>
          </div>
          <div className="slider_digital">
            <div className="card_services">
              <div className="digitalservices_bg">
                <img src={segunda} alt="Serviços Emasa" />
              </div>
              <h3>Segunda Via de Conta</h3>
            </div>
          </div>
          <div className="slider_digital">
            <div className="card_services">
              <div className="digitalservices_bg">
                <img src={segunda} alt="Serviços Emasa" />
              </div>
              <h3>Segunda Via de Conta</h3>
            </div>
          </div>
          <div className="slider_digital">
            <div className="card_services">
              <div className="digitalservices_bg">
                <img src={segunda} alt="Serviços Emasa" />
              </div>
              <h3>Segunda Via de Conta</h3>
            </div>
          </div>
          <div className="slider_digital">
            <div className="card_services">
              <div className="digitalservices_bg">
                <img src={segunda} alt="Serviços Emasa" />
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
      <TeamPreview />
    </>
  );
};

export default LadingContent;
