import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faAdjust,
  faUser,
  faAngleDown,
  faBars,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Header, Container } from './styles/Desktop';
import {
  Nav,
  NavContent,
  LeftContent,
  LogoContent,
  RightContent,
  WrapAccount,
  TopNav,
  TopContent,
  MobileContainer,
  AcessibilityWrap,
  SocialsWrap,
  FaceIcon,
  InstaIcon,
  MobileNav,
  AdjustIcon,
  Account,
  LogoWrap,
  SearchWrap,
  SearchContent,
  FlexInput,
  IconContainer,
} from './styles/Mobile';
import Logo from 'assets/images/logomobile.svg';
import { SearchContainer } from './styles/backUpDesk';
const Search = props => {
  return (
    <SearchWrap>
      <SearchContent justify={'center'}>
        <FlexInput>
          <input placeholder="Pesquisar"></input>
          <IconContainer>
            <FontAwesomeIcon
              className="searchIcon"
              icon={faSearch}
              size="xs"
              fixedWidth
              color="white"
            />
          </IconContainer>
        </FlexInput>
      </SearchContent>
    </SearchWrap>
  );
};
const MainNav = props => {
  return (
    <MobileNav>
      <MobileContainer>
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
          <LogoWrap>
            <img src={Logo} />
          </LogoWrap>
          <RightContent>
            <Account>
              <FontAwesomeIcon
                className="adjust"
                icon={faUserCircle}
                size="lg"
                fixedWidth
                color="white"
              />
            </Account>
          </RightContent>
        </NavContent>
      </MobileContainer>
    </MobileNav>
  );
};

const TopMain = props => {
  return (
    <TopNav>
      <MobileContainer>
        <TopContent justify={'center'}>
          <AcessibilityWrap>
            <AdjustIcon>
              <FontAwesomeIcon
                className="adjust"
                icon={faAdjust}
                size="md"
                fixedWidth
                color="white"
              />
            </AdjustIcon>
          </AcessibilityWrap>
          <SocialsWrap>
            <FaceIcon>
              <FontAwesomeIcon
                className="adjust"
                icon={faFacebookF}
                size="md"
                fixedWidth
                color="white"
              />
            </FaceIcon>
            <InstaIcon>
              <FontAwesomeIcon
                className="adjust"
                icon={faInstagram}
                size="md"
                fixedWidth
                color="white"
              />
            </InstaIcon>
          </SocialsWrap>
        </TopContent>
      </MobileContainer>
    </TopNav>
  );
};
const NavMain = props => {
  const [isHover, setisHover] = React.useState(false);
  return (
    <Nav>
      <MobileContainer>
        <NavContent justify={'space-between'}></NavContent>
      </MobileContainer>
    </Nav>
  );
};

const Main = props => {
  return (
    <Header>
      <TopMain />
      <MainNav />
      <Search />
    </Header>
  );
};

export default Main;
