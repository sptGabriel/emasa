import React from 'react';
import {
  Header,
  TopNav,
  HeaderMid,
  Container,
  Nav,
  ContentTopNav,
  WrapAcessibility,
  Right,
  PopUp,
  ContentMid,
  Left,
  Mid,
  FlexInput,
  IconContainer,
  NavUl,
  NavLi,
  WrapIcons,
  FaceIcon,
  InstaIcon,
  DropDownLogin,
} from './styles/Desktop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faAdjust,
  faUser,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from 'assets/images/test3.svg';
const NavTop = props => {
  return (
    <TopNav>
      <Container>
        <ContentTopNav justify={'space-between'}>
          <WrapAcessibility justify={'flex-start'}>
            <p> Acessibilidade</p>
            <ul>
              <li>
                <a>A-</a>
              </li>
              <li>
                <a>A+</a>
              </li>
              <FontAwesomeIcon
                className="adjust"
                icon={faAdjust}
                size="md"
                fixedWidth
                color="white"
              />
            </ul>
          </WrapAcessibility>
          <WrapIcons>
            <FaceIcon>
              <FontAwesomeIcon
                className="adjust"
                icon={faFacebookF}
                size="lg"
                fixedWidth
                color="white"
              />
            </FaceIcon>
            <InstaIcon>
              <FontAwesomeIcon
                className="adjust"
                icon={faInstagram}
                size="lg"
                fixedWidth
                color="white"
              />
            </InstaIcon>
          </WrapIcons>
        </ContentTopNav>
      </Container>
    </TopNav>
  );
};

const InnerHeader = props => {
  const [isHover, setisHover] = React.useState(false);
  return (
    <HeaderMid>
      <Container>
        <ContentMid justify={'space-between'}>
          <Left>
            <img src={Logo} />
          </Left>
          <Mid>
            <FlexInput>
              <input placeholder="Pesquisar"></input>
              <IconContainer>
                <FontAwesomeIcon
                  className="searchIcon"
                  icon={faSearch}
                  size="md"
                  fixedWidth
                  color="white"
                />
              </IconContainer>
            </FlexInput>
          </Mid>
          <Right>
            <p onClick={() => setisHover(true)}>
              Minha Conta
              <span>
                <FontAwesomeIcon
                  className="adjust"
                  icon={faAngleDown}
                  size="lg"
                  fixedWidth
                  color="white"
                />
              </span>
            </p>
            <PopUp hover={isHover} />
          </Right>
        </ContentMid>
      </Container>
    </HeaderMid>
  );
};
const NavMain = props => {
  return (
    <Nav>
      <Container>
        <NavUl>
          <NavLi>
            <a>Emasa</a>
          </NavLi>
          <NavLi>
            <a>Quem Somos</a>
          </NavLi>
          <NavLi>
            <a>Informativos</a>
          </NavLi>
          <NavLi>
            <a>Transparência</a>
          </NavLi>
          <NavLi>
            <a>Quem Somos</a>
          </NavLi>
          <NavLi>
            <a>Informativos</a>
          </NavLi>
          <NavLi>
            <a>Transparência</a>
          </NavLi>
          <NavLi>
            <a>Informativos</a>
          </NavLi>
          <NavLi>
            <a>Informativos</a>
          </NavLi>
        </NavUl>
      </Container>
    </Nav>
  );
};
const Main = props => {
  return (
    <Header>
      <NavTop />
      <InnerHeader />
      <NavMain />
    </Header>
  );
};

export default Main;
