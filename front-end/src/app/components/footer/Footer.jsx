import React from 'react';
import { FooterTop, Container, Content } from './styles/footer';
import { Footer } from 'app/globals/global_styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import CallIcon from 'assets/images/callicon.png';
const FooterMain = props => {
  return (
    <Footer>
      <FooterTop>
        <Container>
          <Content>
            <div className="grid_map">
              {/* <h3 className="title">Mapa do Site</h3> */}
              <ul className="institucional">
                <h3>Institucional</h3>
                <li>Emasa</li>
                <li>Transparência</li>
                <li>Equipe</li>
                <li>Emasa</li>
                <li>Transparência</li>
                <li>Equipe</li>
                <li>Emasa</li>
                <li>Transparência</li>
                <li>Equipe</li>
              </ul>
              <ul className="institucional2">
                <h3>Institucional</h3>
                <li>Emasa</li>
                <li>Transparência</li>
                <li>Equipe</li>
                <li>Emasa</li>
                <li>Transparência</li>
                <li>Equipe</li>
                <li>Emasa</li>
                <li>Transparência</li>
                <li>Equipe</li>
              </ul>
              <ul className="institucional3">
                <h3>Institucional</h3>
                <li>Emasa</li>
                <li>Transparência</li>
                <li>Equipe</li>
                <li>Emasa</li>
                <li>Transparência</li>
                <li>Equipe</li>
                <li>Emasa</li>
                <li>Transparência</li>
                <li>Equipe</li>
              </ul>
            </div>
            <div className="support">
              <div className="iconBg">
                <img src={CallIcon} alt="Call Center Img" />
              </div>
              <div className="ouvidoria">
                <h3>Ouvidoria</h3>
                <h3>0800 073 1195</h3>
                <h3>
                  Atendimento de
                  <br />
                  Segunda à Sexta-feira
                  <br />
                  DAS 08:00 AS 18:00
                </h3>
              </div>
            </div>
            <div className="Contact">
              <li>Contato</li>
              <li>Canal de Denuncias</li>
              <li>ÁREA DO ASSOCIADO</li>
              <div className="socials_icons">
                <FontAwesomeIcon
                  className="adjust"
                  icon={faFacebook}
                  size="2x"
                  fixedWidth
                  color="#fff"
                />
                <FontAwesomeIcon
                  className="adjust"
                  icon={faInstagram}
                  size="2x"
                  fixedWidth
                  color="#fff"
                />
                <FontAwesomeIcon
                  className="adjust"
                  icon={faYoutube}
                  size="2x"
                  fixedWidth
                  color="#fff"
                />
              </div>
              <p>
                Desenvolvido por <strong> Gabriel Costa</strong>
              </p>
            </div>
          </Content>
        </Container>
      </FooterTop>
    </Footer>
  );
};

export default FooterMain;
