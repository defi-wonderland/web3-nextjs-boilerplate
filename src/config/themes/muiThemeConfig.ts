import { createTheme } from '@mui/material';
import { CustomMuiTheme } from '~/types';

export const getMuiThemeConfig = (customTheme: CustomMuiTheme) => {
  return createTheme({
    palette: customTheme.light,
    typography: customTheme.typography,
    colorSchemes: {
      light: {
        palette: {
          ...customTheme.light,
        },
      },
      dark: {
        palette: {
          ...customTheme.dark,
        },
      },
    },
    borderRadius: customTheme.borderRadius,
    cssVariables: {
      colorSchemeSelector: 'class',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          body: {
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
          borderRadius: customTheme.borderRadius.sm,
        }),
      },
    },
  });
};
