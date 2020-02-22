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
} from './styles/Desktop_styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faAdjust,
  faUserCircle,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

const NavTop = props => {
  const [isHover, setisHover] = React.useState(false);
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
  return (
    <HeaderMid>
      <Container></Container>
    </HeaderMid>
  );
};
const NavMain = props => {
  return (
    <Nav>
      <Container></Container>
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
