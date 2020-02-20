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
} from './styles/Desktop';
import { useTheme } from 'emotion-theming';
import LogoImg from 'assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAdjust } from '@fortawesome/free-solid-svg-icons';

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
  const Theme = useTheme();

  return (
    <Container theme={Theme}>
      <TopHeader {...props} theme={Theme} />
      <NavBar {...props} theme={Theme} />
    </Container>
  );
};

export default DesktopNav;
