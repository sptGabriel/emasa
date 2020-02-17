import { useState, useEffect } from 'react';
import { darkTheme, lightTheme } from '../themes/index';

function usePersistedState(value) {
  const [state, setState] = useState(() => {
    const storageValue = JSON.parse(localStorage.getItem('theme'));
    switch (storageValue) {
      case 'dark':
        return darkTheme;
      case 'light':
        return lightTheme;
      default:
        return lightTheme;
    }
  });
  console.log(state);

  useEffect(() => {
    const storageValue = JSON.parse(localStorage.getItem('theme'));
    if (storageValue !== state.type) {
      localStorage.setItem('theme', JSON.stringify(state.type));
    }
  }, [value, state]);
  return [state, setState];
}

export default usePersistedState;
