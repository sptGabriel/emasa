import { useState, useEffect } from 'react';
import { darkTheme, lightTheme } from '../themes/index';

export default function useTheme(defaultTheme = lightTheme) {
  const [theme, _setTheme] = useState(getInitialTheme);

  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return JSON.parse(savedTheme) === 'dark' ? darkTheme : defaultTheme;
    } else {
      return defaultTheme;
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme.type));
  }, [theme]);

  return {
    ...theme,
    setTheme: ({ setTheme, ...theme }) => {
      if (theme.type === 'dark') {
        return _setTheme(darkTheme);
      } else {
        return _setTheme(lightTheme);
      }
    },
  };
}
