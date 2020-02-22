import React from 'react';
import {
  Container,
  Content,
  HeaderTop,
  Nav,
  ContainerTop,
  ContainerNav,
  SearchContainer,
  IconContainer,
  Accessibility,
  ImgWrap,
  MidContainer,
  WrapperLogin,
  LoginColumn,
  SignWrap,
  LoginIconWrap,
  DropDownWrap,
} from './styles/Desktop';
import LogoImg from 'assets/images/logo.png';
import LogoImg2 from 'assets/images/emasa.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faAdjust,
  faUserCircle,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

const NavAcessibility = props => {
  const { theme, setTheme } = props;
  const { multiplyFont, setFont } = props;
  return (
    <Accessibility {...props}>
      <ul>
        <li>
          <a
            onClick={() => {
              setFont(multiplyFont - 1);
            }}
          >
            A-
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setFont(multiplyFont + 1);
            }}
          >
            A+
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon
              className="adjust"
              icon={faAdjust}
              size="lg"
              fixedWidth
              color="white"
              onClick={() => {
                setTheme(
                  theme.type === 'dark' ? { type: 'light' } : { type: 'dark' },
                );
              }}
            />
          </a>
        </li>
      </ul>
    </Accessibility>
  );
};
const ItemsTop = props => {
  return (
    <>
      <ImgWrap>
        <img src={LogoImg} />
        <h3>EMASA</h3>
      </ImgWrap>
      <MidContainer>
        <SearchContainer theme={props.theme}>
          <input placeholder="Pesquisar"></input>
          <IconContainer>
            <FontAwesomeIcon
              className="searchIcon"
              icon={faSearch}
              size="lg"
              fixedWidth
              color="white"
            />
          </IconContainer>
        </SearchContainer>
        <LoginColumn>
          <WrapperLogin>
            <LoginIconWrap>
              <a>
                <FontAwesomeIcon
                  className="adjust"
                  icon={faUserCircle}
                  size="2x"
                  fixedWidth
                  color="white"
                />
              </a>
            </LoginIconWrap>
            <DropDownWrap>
              <a>
                <p>
                  MyAccount
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
              </a>
            </DropDownWrap>
          </WrapperLogin>
          <SignWrap>a</SignWrap>
        </LoginColumn>
      </MidContainer>
    </>
  );
};

const TopHeader = props => {
  return (
    <ContainerTop theme={props.theme}>
      <HeaderTop>
        <ItemsTop {...props} />
        <NavAcessibility {...props} />
      </HeaderTop>
    </ContainerTop>
  );
};

const NavBar = props => {
  return (
    <ContainerNav theme={props.theme}>
      <Content>
        <Nav {...props}>
          <ul>
            <li>
              <a href="#home">Emasa</a>
            </li>
            <li>
              <a href="#homex">Anuário</a>
            </li>
            <li>
              <a href="#homexv">Informativo</a>
            </li>
            <li>
              <a href="#homexv">2 Via</a>
            </li>
            <li>
              <a href="#homexv">Transparência</a>
            </li>
            <li>
              <a href="#homexv">Licitação</a>
            </li>
            <li>
              <a href="#homexv">Licitação</a>
            </li>
            <li>
              <a href="#homexv">Licitação</a>
            </li>
          </ul>
        </Nav>
      </Content>
    </ContainerNav>
  );
};

const DesktopNav = props => {
  return (
    <Container>
      <TopHeader {...props} />
      <NavBar {...props} />
    </Container>
  );
};

export default DesktopNav;
