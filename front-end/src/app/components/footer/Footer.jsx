import React from 'react';
import { FooterTop, FooterBottom, Container, Content } from './styles/footer';
import { Footer } from 'app/globals/global_styles';
const FooterMain = props => {
  return (
    <Footer>
      <FooterTop>
        <Container>
          <Content>
            <div className="mapa">
              <h3 className="title">Mapa do Site</h3>
              <ul className="nav_footer">
                <li>A Empresa</li>
                <li>Fale Conosco</li>
                <li>Licitações</li>
                <li>Meio Ambiente</li>
                <li>Transparência</li>
                <li>Loja Virtual</li>
                <li>Niveis dos Rios</li>
                <li>Notícias</li>
                <li>Sanemaento</li>
                <li>Social</li>
                <li>WebMail</li>
                <li>Login</li>
              </ul>
            </div>
          </Content>
        </Container>
      </FooterTop>
      <FooterBottom>
        <Container>a</Container>
      </FooterBottom>
    </Footer>
  );
};

export default FooterMain;
