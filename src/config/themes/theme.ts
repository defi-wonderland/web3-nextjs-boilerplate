import { CustomMuiTheme } from '~/types';

// 🎨 You can customize the palette here to change the default colors
// const palette = {
//    error: {
//      main: '#BA6B5D',
//      light: '#ECCCC6',
//      dark: '#824A41',
//    },
//    warning,
//    success,
//    info,
// };

const core = {
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  borderRadius: {
    default: '0.8rem',
    sm: '0.4rem',
    md: '0.6rem',
    lg: '0.8rem',
  },
};

export const darkTheme = {
  // ...palette,
  background: {
    default: '#000000',
    secondary: '#161616',
  },
  text: {
    title: '#000000',
    primary: '#ffffff',
    secondary: '#99A4B8',
  },
  title: {
    primary: '#000000',
  },
  border: '0.1rem solid rgba(153, 164, 184, 0.1)',
};

export const lightTheme = {
  // ...palette,
  background: {
    default: '#ffffff',
    secondary: '#f8f8f8',
  },
  text: {
    title: '#000000',
    primary: '#000000',
    secondary: '#717171',
  },
  title: {
    primary: '#000000',
  },
  border: '0.1rem solid rgba(183, 183, 183, 0.3)',
};

export const customTheme: CustomMuiTheme = {
  light: lightTheme,
  dark: darkTheme,
  ...core,
};
