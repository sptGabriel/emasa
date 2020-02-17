/** @jsx jsx */
import { useState } from 'react';
import { jsx, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyle from './app/globals/global_css';
import useTheme from './utils/useTheme';
import Header from './app/components/header';

export default function App() {
  const theme = useTheme();
  console.log(theme, 'a');
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <button
          css={css`
            background: red;
            width: 100px;
            height: 50px;
            border-radius: 10px;
          `}
          onClick={() =>
            theme.setTheme(
              theme.type === 'dark' ? { type: 'light' } : { type: 'dark' },
            )
          }
        >
          a
        </button>
      </div>
    </ThemeProvider>
  );
}
