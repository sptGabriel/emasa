/** @jsx jsx */
import { useEffect } from 'react';
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyle from './app/globals/global_css';
import useAppTheme from './utils/useAppTheme';
import DesktopHeader from 'app/components/header/Desktop';
import MobileHeader from 'app/components/header/Mobile';
import useFontSize from 'utils/useFontSize';
import { Overlay } from 'app/globals/global_styles';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from 'redux/slices/popupMenu';
import { toggleSide } from 'redux/slices/sideBar';
import { GlobalContainer, FooterWrapper } from 'app/globals/global_styles';
import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export default function App() {
  const { theme, setTheme } = useAppTheme();
  const [fontSize, setFontSize] = useFontSize();
  useEffect(() => {});

  const dispatch = useDispatch();
  const { popUpIsOpen } = useSelector(RootState => RootState.togglePopUp);
  const { sideIsOpen } = useSelector(RootState => RootState.toggleSide);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalContainer>
        <Overlay
          onClick={() =>
            popUpIsOpen ? dispatch(toggle()) : dispatch(toggleSide())
          }
          pop={popUpIsOpen ? popUpIsOpen : sideIsOpen}
        />
        <Desktop>
          <DesktopHeader />
        </Desktop>
        <Mobile>
          <MobileHeader />
        </Mobile>
        <FooterWrapper></FooterWrapper>
      </GlobalContainer>
    </ThemeProvider>
  );
}
