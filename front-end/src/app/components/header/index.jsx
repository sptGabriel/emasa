import React, { useState } from 'react';
import {
  Container,
  Content,
  HeaderTop,
  Nav,
  WrapperTop,
  ContainerTop,
  ContainerNav,
} from './styles';
import { useTheme } from 'emotion-theming';

const ItemsTop = props => {
  return (
    <WrapperTop
      justify={'space-between'}
      align={'center'}
      flexdirection={'row'}
    >
      <div>a</div>
      <div>a</div>
      <div>a</div>
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
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#homex">test</a>
            </li>
            <li>
              <a href="#homexv">test</a>
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
