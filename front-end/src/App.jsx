/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyle from './app/globals/global_css';
import useAppTheme from './utils/useAppTheme';
import Header from 'app/components/header/index';
import useFontSize from 'utils/useFontSize';
export default function App() {
  const { theme, setTheme } = useAppTheme();
  const { fontSize, setSize } = useFontSize();
  useEffect(() => {});
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header multiplyFont={fontSize} setFont={setSize} setTheme={setTheme} />
      </div>
    </ThemeProvider>
  );
}
