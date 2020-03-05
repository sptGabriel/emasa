import React, { useEffect } from 'react';
import {
  Header,
  TopNav,
  HeaderMid,
  Container,
  Nav,
  ContentTopNav,
  WrapAcessibility,
  MyAccount,
  PopUp,
  ContentMid,
  WrapLogo,
  Mid,
  NavUl,
  WrapIcons,
  FaceIcon,
  InstaIcon,
  NavBetween,
  SearchWrapper,
  NavGrid,
} from './styles/Desktop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faAdjust,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from 'assets/images/test3.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from 'redux/slices/popupMenu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
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
  const dispatch = useDispatch();
  const { popUpIsOpen } = useSelector(RootState => RootState.togglePopUp);
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
          <MyAccount>
            <h3 onClick={() => dispatch(toggle())}>
              Minha Conta
              <span>
                <FontAwesomeIcon
                  className="adjust"
                  icon={faAngleDown}
                  size="xs"
                  fixedWidth
                  color="white"
                />
              </span>
            </h3>
            <DropDownPopUp isOpen={popUpIsOpen} />
          </MyAccount>
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

const NavMain = props => {
  const [isOpenBox, setOpenBox] = useState(null);
  console.log(isOpenBox);
  return (
    <Nav>
      <Container>
        <NavBetween>
          <WrapLogo>
            <img src={Logo} />
          </WrapLogo>
          <NavGrid>
            <NavUl isOpen={isOpenBox}>
              <li>
                <Link to="/">One</Link>
              </li>
              <li>
                <Link to="../about">Two</Link>
              </li>
              <li>
                <Link to="../dashboard">Three</Link>
              </li>
              <li>
                <Link to="../dashboard/about">Four</Link>
              </li>
              <li>
                <Link to="../dashboard/test">Five</Link>
              </li>
              <li>
                <Link to="/about">Home</Link>
              </li>
              <li>
                <Link to="/about">Home</Link>
              </li>
              <li>
                <Link to="/about">Home</Link>
              </li>
              <li>
                <Link to="/about">Home</Link>
              </li>
              <li>
                <FontAwesomeIcon
                  onClick={() => setOpenBox(!isOpenBox)}
                  className="searchIcon"
                  rotation={90}
                  icon={faSearch}
                  size="1x"
                  fixedWidth
                  color="rgba(0, 0, 0, 0.08);"
                />
              </li>
            </NavUl>
            <SearchWrapper isOpen={isOpenBox}>
              <div className="FlexInput">
                <input placeholder="Pesquisar"></input>
                <div className="IconContainer">
                  <FontAwesomeIcon
                    onClick={() => setOpenBox(!isOpenBox)}
                    className="searchIcon"
                    icon={faTimes}
                    size="xs"
                    fixedWidth
                    color="black"
                  />
                </div>
              </div>
            </SearchWrapper>
          </NavGrid>
        </NavBetween>
      </Container>
    </Nav>
  );
};
const Main = props => {
  return (
    <Header>
      <NavTop />
      <NavMain />
    </Header>
  );
};

export default Main;
