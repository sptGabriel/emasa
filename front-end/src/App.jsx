/** @jsx jsx */
import { useEffect } from 'react';
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyle from './app/globals/global_css';
import useAppTheme from './utils/useAppTheme';
import DesktopHeader from 'app/components/header/Desktop';
import MobileHeader from 'app/components/header/Mobile';
import useFontSize from 'utils/useFontSize';
export default function App() {
  const { theme, setTheme } = useAppTheme();
  const [fontSize, setFontSize] = useFontSize();
  useEffect(() => {});
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MobileHeader />
    </ThemeProvider>
  );
}
