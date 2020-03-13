import React, { useState } from 'react';
import {
  Header,
  TopNav,
  Container,
  Nav,
  NavLi,
  ContentTopNav,
  WrapAcessibility,
  MyAccount,
  PopUp,
  WrapLogo,
  NavUl,
  WrapIcons,
  FaceIcon,
  InstaIcon,
  NavBetween,
  SearchWrapper,
  NavGrid,
  DropDown,
  DropDownItem,
} from './styles/Desktop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faAdjust,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from 'assets/images/test3.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from 'redux/slices/popupMenu';
import { Link } from 'react-router-dom';
import OnOutsiceClick from 'react-outclick';
const DropDownPopUp = props => {
  return (
    <PopUp id="popup" {...props}>
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
                <button>A</button>
              </li>
              <li>
                <button>A+</button>
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
                icon={faFacebookSquare}
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

const MenuItem = ({ tag, visibleMenu, setVisible, index }) => {
  const { name, link, dropdownItems } = tag;
  const handleClick = index => {
    if (visibleMenu === index) return setVisible('none');
    return setVisible(index);
  };
  const click = () => {
    return setVisible('none');
  };

  return (
    <NavLi onClick={() => handleClick(index)}>
      <a>{name}</a>
      {visibleMenu && dropdownItems ? (
        <DropDown>
          {dropdownItems.map(item => (
            <DropDownItem key={item.name}>
              <a href={item.link}>{item.name}</a>
            </DropDownItem>
          ))}
          <OnOutsiceClick onOutsideClick={click} />
        </DropDown>
      ) : (
        ''
      )}
    </NavLi>
  );
};

const MenuBar = props => {
  const MenuTags = [
    {
      name: 'home',
      link: '/',
      dropdownItems: [
        { name: 'one', link: '/aa' },
        { name: 'two', link: '/b/' },
      ],
    },
    {
      name: 'about',
      link: '../abovisibleMenuut',
      dropdownItems: [
        { name: 'one', link: '/aa' },
        { name: 'two', link: '/b/' },
      ],
    },
    { name: 'not dropdown', link: '../dashboard' },
    { name: 'not dropdown', link: '../dashboard/about' },
  ];
  const [visible, setVisible] = useState('none');
  return (
    <NavUl isOpen={props.isOpen}>
      {MenuTags.map((item, index) => (
        <MenuItem
          key={index}
          index={index}
          tag={item}
          setVisible={setVisible}
          visibleMenu={visible === index ? true : false}
        />
      ))}
      <li>
        <FontAwesomeIcon
          onClick={() => props.setOpenBox(!props.isOpen)}
          className="searchIcon"
          rotation={90}
          icon={faSearch}
          size="1x"
          fixedWidth
          color="rgba(0, 0, 0, 0.08);"
        />
      </li>
    </NavUl>
  );
};

const NavMain = props => {
  const [isOpenBox, setOpenBox] = useState(null);
  // const [dropDownItems, setDropDownItem] = useState({
  //   dropdown_home: false,
  //   dropdown_about: false,
  // });
  // const updateDropDownItem = (dropDownItem, value) => {
  //   let existingValues = JSON.parse(JSON.stringify(dropDownItems));
  //   existingValues[dropDownItem] = value;
  //   setDropDownItem(existingValues);
  // };
  return (
    <Nav>
      <Container>
        <NavBetween>
          <WrapLogo>
            <img src={Logo} alt="Logo Emasa" />
          </WrapLogo>
          <NavGrid>
            <MenuBar isOpen={isOpenBox} setOpenBox={setOpenBox} />
            {/* <NavLi
                onClick={() => {
                  updateDropDownItem(
                    'dropdown_home',
                    !dropDownItems.dropdown_home,
                  );
                }}
              >
                <Link to="/">One</Link>
                {dropDownItems.dropdown_home ? (
                  <ul>
                    <li>
                      <a className="active" href="#Create Page">
                        Create Page
                      </a>
                    </li>
                    <li>
                      <a href="#Manage Pages">Manage Pages</a>
                    </li>
                  </ul>
                ) : null}
              </NavLi>
              <NavLi
                onClick={() => {
                  updateDropDownItem(
                    'dropdown_about',
                    !dropDownItems.dropdown_about,
                  );
                }}
              >
                <Link to="../about">Two</Link>
                {dropDownItems.dropdown_about ? (
                  <ul>
                    <li>
                      <a className="active" href="#Create Page">
                        Create Page
                      </a>
                    </li>
                    <li>
                      <a href="#Manage Pages">Manage Pages</a>
                    </li>
                  </ul>
                ) : null}
              </NavLi>
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
            </NavUl> */}
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
