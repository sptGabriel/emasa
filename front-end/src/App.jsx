/** @jsx jsx */
import { useEffect } from 'react';
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyle from './app/globals/global_css';
import useAppTheme from './utils/useAppTheme';
import { NavBar } from 'app/components/header/index';
import useFontSize from 'utils/useFontSize';
export default function App() {
  const { theme, setTheme } = useAppTheme();
  const [fontSize, setFontSize] = useFontSize();
  useEffect(() => {});
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <NavBar
          multiplyFont={fontSize}
          setFont={setFontSize}
          setTheme={setTheme}
        />
      </div>
    </ThemeProvider>
  );
}
