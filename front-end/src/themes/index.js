export const breakpoints = {
  xs: 320,
  sm: 600,
};

export const lightTheme = {
  type: 'light',
  navbar: {
    background: {
      topbar: '#01baef',
      navmain: '#8ac926',
      search: 'rgba(0, 0, 0, 0.1)',
    },
  },
  colors: {
    primary: '#fff',
    secondary: '#2a2d34',

    background: '#FFF',
    text: '#333',
  },
  gradientHeader: {
    primary: '#2176FF',
    secondary: '#33A1FD',
  },
};

export const darkTheme = {
  type: 'dark',
  navbar: {
    background: {
      topbar: '#000',
      navmain: '#1D1D1D',
      search: 'rgba(17, 17, 17, 0.5)',
    },
  },
  colors: {
    primary: 'white',
    secondary: '#DF2935',

    background: '#111',
    text: '#fff',
  },
  gradientHeader: {
    primary: '#2176FF',
    secondary: '#33A1FD',
  },
};
