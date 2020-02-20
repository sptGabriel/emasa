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

const NavBar = props => {
  const Theme = useTheme();
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
          </ul>
        </Nav>
      </Content>
    </ContainerNav>
  );
};

export default NavBar;
