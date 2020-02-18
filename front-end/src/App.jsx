/** @jsx jsx */
import { useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyle from './app/globals/global_css';
import useAppTheme from './utils/useAppTheme';
import Header from 'app/components/header/index';

export default function App() {
  const { theme, setTheme } = useAppTheme();

  useEffect(() => {});

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}
