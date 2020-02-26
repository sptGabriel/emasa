import React from 'react';
import {
  Header,
  TopNav,
  HeaderMid,
  Container,
  Nav,
  ContentTopNav,
  WrapAcessibility,
  WrapAccount,
  PopUp,
  ContentMid,
  LogoContainer,
  SearchContainer,
  FlexInput,
  IconContainer,
  NavUl,
  NavLi,
} from './styles/Desktop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faAdjust,
  faUser,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import Logo from 'assets/images/test3.svg';
const NavTop = props => {
  return (
    <TopNav>
      <Container>
        <ContentTopNav>
          <WrapAcessibility justify={'flex-start'}>
            <p> Acessibilidade</p>
            <ul>
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
                    size="lg"
                    fixedWidth
                    color="white"
                  />
                </a>
              </li>
            </ul>
          </WrapAcessibility>
          {/* <WrapAccount justify={'flex-end'}>
            <li
              onMouseOver={() => setisHover(true)}
              onMouseOut={() => setisHover(false)}
            >
              <a>
                My Account
                <span>
                  <FontAwesomeIcon
                    className="adjust"
                    icon={faAngleDown}
                    size="md"
                    fixedWidth
                    color="white"
                  />
                </span>
              </a>
            </li>
            <PopUp hover={isHover}></PopUp>
          </WrapAccount> */}
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
          <LogoContainer>
            <img src={Logo} />
          </LogoContainer>
          <SearchContainer>
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
          </SearchContainer>
          <WrapAccount justify={'flex-end'}>
            <li
              onMouseOver={() => setisHover(true)}
              onMouseOut={() => setisHover(false)}
            >
              <a>
                <span>
                  <FontAwesomeIcon
                    className="adjust"
                    icon={faUser}
                    size="lg"
                    fixedWidth
                    color="#fff"
                  />
                </span>
                My Account
                <span>
                  <FontAwesomeIcon
                    className="adjust"
                    icon={faAngleDown}
                    size="md"
                    fixedWidth
                    color="white"
                  />
                </span>
              </a>
            </li>
            <PopUp hover={isHover}></PopUp>
          </WrapAccount>
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
