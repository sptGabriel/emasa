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
} from './styles/Desktop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faAdjust,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from 'assets/images/test3.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from 'redux/slices/popupMenu';
import { Link } from 'react-router-dom';
const DropDownPopUp = props => {
  return (
    <PopUp {...props}>
      <p>Você é um funcionário?</p>
      <div>
        <button>Entrar</button>
      </div>
      <div>
        Esqueci meu <button>e-mail</button> ou a <button>senha</button> .
      </div>
    </PopUp>
  );
};

const NavTop = props => {
  return (
    <TopNav>
      <Container>
        <ContentTopNav justify={'space-between'}>
          <WrapAcessibility justify={'flex-start'}>
            <p> Acessibilidade</p>
            <ul>
              <li>
                <a href="#">A-</a>
              </li>
              <li>
                <a href="#">A+</a>
              </li>
              <FontAwesomeIcon
                className="adjust"
                icon={faAdjust}
                size="1x"
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
  const dispatch = useDispatch();
  const { popUpIsOpen } = useSelector(RootState => RootState.togglePopUp);
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
                  size="xs"
                  fixedWidth
                  color="white"
                />
              </IconContainer>
            </FlexInput>
          </Mid>
          <Right>
            <h3 onClick={() => dispatch(toggle())}>
              Minha Conta
              <span>
                <FontAwesomeIcon
                  className="adjust"
                  icon={faAngleDown}
                  size="xs"
                  fixedWidth
                  color="#004fff"
                />
              </span>
            </h3>
            <DropDownPopUp isOpen={popUpIsOpen} />
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
            <Link to="/">One</Link>
          </NavLi>
          <NavLi>
            <Link to="../about">Two</Link>
          </NavLi>
          <NavLi>
            <Link to="../dashboard">Three</Link>
          </NavLi>
          <NavLi>
            <Link to="../dashboard/about">Four</Link>
          </NavLi>
          <NavLi>
            <Link to="../dashboard/test">Five</Link>
          </NavLi>
          <NavLi>
            <Link to="/about">Home</Link>
          </NavLi>
          <NavLi>
            <Link to="/about">Home</Link>
          </NavLi>
          <NavLi>
            <Link to="/about">Home</Link>
          </NavLi>
          <NavLi>
            <Link to="/about">Home</Link>
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
