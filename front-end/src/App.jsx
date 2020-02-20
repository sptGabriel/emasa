/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyle from './app/globals/global_css';
import useAppTheme from './utils/useAppTheme';
import Header from 'app/components/header/index';
import Top from 'app/components/header/TopNav';
import Nav from 'app/components/header/MainNav';
import useFontSize from 'utils/useFontSize';
export default function App() {
  const { theme, setTheme } = useAppTheme();
  const [fontSize, setFontSize] = useFontSize();
  useEffect(() => {});
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Top
          multiplyFont={fontSize}
          setFont={setFontSize}
          setTheme={setTheme}
        />
        <Nav
          multiplyFont={fontSize}
          setFont={setFontSize}
          setTheme={setTheme}
        />
      </div>
    </ThemeProvider>
  );
}
