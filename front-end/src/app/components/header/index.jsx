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
  return (
    <WrapperTop
      justify={'space-between'}
      align={'center'}
      flexdirection={'row'}
    >
      <img src={LogoImg} />
      <SearchContainer>
        <div>
          <FontAwesomeIcon
            className="searchIcon"
            icon={faSearch}
            size="2x"
            fixedWidth
            color="white"
          />
        </div>
        <input></input>
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
      <AccessibilityTwo>
        <FontAwesomeIcon
          className="adjust"
          icon={faAdjust}
          size="1x"
          fixedWidth
          color="white"
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
    <ContainerTop>
      <Content>
        <HeaderTop>
          <ItemsTop />
        </HeaderTop>
      </Content>
    </ContainerTop>
  );
};

const NavBar = props => {
  return (
    <ContainerNav>
      <Content>
        <Nav>
          <ul>
            <li>
              <a href="#home"></a>
            </li>
            <li>
              <a href="#homex"></a>
            </li>
            <li>
              <a href="#homexv"></a>
            </li>
          </ul>
        </Nav>
      </Content>
    </ContainerNav>
  );
};

const Header = () => {
  const Theme = useTheme();

  return (
    <Container theme={Theme}>
      <TopHeader theme={Theme} />
      <NavBar theme={Theme} />
    </Container>
  );
};

export default Header;
