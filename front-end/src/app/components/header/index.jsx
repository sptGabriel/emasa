import React, { useState } from 'react';
import {
  Container,
  Content,
  HeaderTop,
  Nav,
  WrapperTop,
  ContainerTop,
  ContainerNav,
  LogoContent,
  SearchContainer,
  IconContainer,
  Center,
  Accessibility,
  AccessibilityTwo,
  ImgWrap,
} from './styles';
import { useTheme } from 'emotion-theming';
import LogoImg from 'assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faAdjust,
  faTextHeight,
} from '@fortawesome/free-solid-svg-icons';
const NavAcessibility = props => {
  const { setTheme } = props.props;
  const { theme } = props.props;
  return (
    <Accessibility>
      <ul>
        <li>
          <a>
            <p>Acessibilidade</p>
          </a>
        </li>
        <li>
          <a>A-</a>
        </li>
        <li>
          <a>A+</a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon
              className="adjust"
              icon={faAdjust}
              size="1x"
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
  const { setTheme } = props.props;
  const { theme } = props.props;
  return (
    <>
      <ImgWrap>
        <img src={LogoImg} />
      </ImgWrap>
      <SearchContainer theme={props.theme}>
        <IconContainer>
          <FontAwesomeIcon
            className="searchIcon"
            icon={faSearch}
            size="2x"
            fixedWidth
            color="white"
          />
        </IconContainer>
        <input placeholder="Pesquisar"></input>
      </SearchContainer>
    </>
  );
};

const TopHeader = props => {
  return (
    <ContainerTop theme={props.theme}>
      <HeaderTop>
        <ItemsTop props={props} />
        <NavAcessibility props={props} />
      </HeaderTop>
    </ContainerTop>
  );
};

const NavBar = props => {
  return (
    <ContainerNav theme={props.theme}>
      <Content>
        <Nav fontSize={props.fontsize} theme={props.theme}>
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
              <a href="#homexv">Transparência</a>
            </li>
            <li>
              <a href="#homexv">Licitação</a>
            </li>
            <li>
              <a href="#homexv">Contato</a>
            </li>
          </ul>
        </Nav>
      </Content>
    </ContainerNav>
  );
};

const Header = props => {
  const Theme = useTheme();
  return (
    <Container theme={Theme}>
      <TopHeader theme={Theme} setTheme={props.setTheme} setSize={props.size} />
      <NavBar theme={Theme} fontsize={props.multiplyFont} />
    </Container>
  );
};

export default Header;
