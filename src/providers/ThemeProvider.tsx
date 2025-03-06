import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { getConfig } from '~/config';

interface StateProps {
  children: React.ReactElement;
}

export const ThemeProvider = ({ children }: StateProps) => {
  const muiTheme = getConfig().customThemes.getMui;

  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
};
