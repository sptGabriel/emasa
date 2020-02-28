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

export default function App() {
  const { theme, setTheme } = useAppTheme();
  const [fontSize, setFontSize] = useFontSize();
  useEffect(() => {});

  const dispatch = useDispatch();
  const { popUpIsOpen } = useSelector(RootState => RootState.togglePopUp);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Overlay onClick={() => dispatch(toggle())} pop={popUpIsOpen} />
      <MobileHeader />
    </ThemeProvider>
  );
}
