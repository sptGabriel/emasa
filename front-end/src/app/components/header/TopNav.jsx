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
  const { theme, setTheme } = props;
  const { multiplyFont, setFont } = props;
  return (
    <Accessibility {...props}>
      <ul>
        <li>
          <a>
            <p>Acessibilidade</p>
          </a>
        </li>
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
  const { setTheme } = props;
  const { theme } = props;
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
  const Theme = useTheme();
  return (
    <ContainerTop theme={props.theme}>
      <HeaderTop>
        <ItemsTop {...props} />
        <NavAcessibility {...props} />
      </HeaderTop>
    </ContainerTop>
  );
};

export default TopHeader;
