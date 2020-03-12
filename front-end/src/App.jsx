/** @jsx jsx */
import { useEffect } from 'react';
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import useAppTheme from './utils/useAppTheme';
import useFontSize from 'utils/useFontSize';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes/index';

export default function App() {
  const { theme, setTheme } = useAppTheme();
  // const [fontSize, setFontSize] = useFontSize();
  useEffect(() => {});
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Router>
  );
}
