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
} from './styles';
import { useTheme } from 'emotion-theming';
import LogoImg from 'assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faAdjust,
  faTextHeight,
} from '@fortawesome/free-solid-svg-icons';

const ItemsTop = props => {
  const { setTheme } = props.props;
  const { theme } = props.props;
  return (
    <WrapperTop
      justify={'space-between'}
      align={'center'}
      flexdirection={'row'}
    >
      <img src={LogoImg} />
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
      {/* <Accessibility>
        <h3>Acessibilidade:</h3>
        <FontAwesomeIcon
          icon={faTextHeight}
          size="1x"
          fixedWidth
          color="#14BDEB"
        />
        <FontAwesomeIcon
          className="adjust"
          icon={faAdjust}
          size="1x"
          fixedWidth
          color="#14BDEB"
        />
      </Accessibility> */}
      <AccessibilityTwo theme={props.theme}>
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
        <FontAwesomeIcon
          icon={faTextHeight}
          size="1x"
          fixedWidth
          color="white"
        />
      </AccessibilityTwo>
    </WrapperTop>
  );
};

const TopHeader = props => {
  return (
    <ContainerTop theme={props.theme}>
      <Content>
        <HeaderTop>
          <ItemsTop props={props} />
        </HeaderTop>
      </Content>
    </ContainerTop>
  );
};

const NavBar = props => {
  console.log(props.theme);
  return (
    <ContainerNav theme={props.theme}>
      <Content>
        <Nav theme={props.theme}>
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
      <TopHeader theme={Theme} setTheme={props.setTheme} />
      <NavBar theme={Theme} />
    </Container>
  );
};

export default Header;
