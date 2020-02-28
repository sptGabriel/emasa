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
  SideBar,
  StyledBurger,
  SideBarHeader,
  SideBarBody,
} from './styles/Mobile';
import Logo from 'assets/images/logomobile.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSide } from 'redux/slices/sideBar';
import { RootState } from 'redux/config/rootReducer';

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

const SideNavBar = props => {
  return (
    <SideBar {...props}>
      <SideBarHeader>
        <img src={Logo} />
      </SideBarHeader>
      <SideBarBody>
        <ul>
          <li>Anuário</li>
          <li>Informativo</li>
          <li>2 Via</li>
          <li>Transferência</li>
          <li>Licitação</li>
          <li>WebMail</li>
          <li>Contato</li>
        </ul>
      </SideBarBody>
    </SideBar>
  );
};

const MainNav = props => {
  const dispatch = useDispatch();
  return (
    <MobileNav>
      <MobileContainer>
        <NavContent justify={'space-between'}>
          <LeftContent isOpen={props.sideisOpen}>
            <StyledBurger
              open={props.sideisOpen}
              onClick={() => dispatch(toggleSide())}
            >
              <div />
              <div />
              <div />
            </StyledBurger>
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
                size="1x"
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
                size="1x"
                fixedWidth
                color="white"
              />
            </FaceIcon>
            <InstaIcon>
              <FontAwesomeIcon
                className="adjust"
                icon={faInstagram}
                size="1x"
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
  const { sideIsOpen } = useSelector(RootState => RootState.toggleSide);
  return (
    <Header>
      <SideNavBar IsOpen={sideIsOpen} />
      <TopMain />
      <MainNav sideisOpen={sideIsOpen} />
      <Search />
    </Header>
  );
};

export default Main;
