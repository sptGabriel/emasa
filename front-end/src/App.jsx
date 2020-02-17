import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { darkTheme, lightTheme } from './themes/index';
import usePersistedState from './utils/usePersistedState';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyle from './app/globals/global_css';
import useTheme from './utils/useTheme';
export default function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
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
