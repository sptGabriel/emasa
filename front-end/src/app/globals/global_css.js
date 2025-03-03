import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

export default function GlobalStyle(props) {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Comfortaa|Yanone+Kaffeesatz&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
        * {
          padding: 0;
          margin: 0;
        }
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }
        button {
          background-color: transparent;
          color: inherit;
          border-width: 0;
          padding: 0;
          cursor: pointer;
        }
        figure {
          margin: 0;
        }
        input::-moz-focus-inner {
          border: 0;
          padding: 0;
          margin: 0;
        }
        ul,
        ol,
        dd {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-size: inherit;
          font-weight: inherit;
        }
        p {
          margin: 0;
        }
        cite {
          font-style: normal;
        }
        fieldset {
          border-width: 0;
          padding: 0;
          margin: 0;
        }

        body {
          background: ${theme.colors.background};
          color: ${theme.colors.text};
          transition-duration: 0.4s;
          transition-property: background-color, color;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        }
      `}
    />
  );
}
