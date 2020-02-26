import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faAdjust,
  faUser,
  faAngleDown,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { Header, Container } from './styles/Desktop';
import {
  Nav,
  NavContent,
  LeftContent,
  LogoContent,
  RightContent,
  WrapAccount,
  PopUp,
} from './styles/Mobile';
import Logo from 'assets/images/logomobile.svg';
const NavMain = props => {
  const [isHover, setisHover] = React.useState(false);
  return (
    <Nav>
      <Container>
        <NavContent justify={'space-between'}>
          <LeftContent>
            <button>
              <FontAwesomeIcon
                className="adjust"
                icon={faBars}
                size="lg"
                fixedWidth
                color="white"
              />
            </button>
          </LeftContent>
          <RightContent>
            <FontAwesomeIcon
              className="adjust"
              icon={faBars}
              size="lg"
              fixedWidth
              color="white"
            />
          </RightContent>
        </NavContent>
      </Container>
    </Nav>
  );
};

const Main = props => {
  return (
    <Header>
      <NavMain />
    </Header>
  );
};

export default Main;
