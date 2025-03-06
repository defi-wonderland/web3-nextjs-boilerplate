import { getMuiThemeConfig } from './muiThemeConfig';
import { customTheme as rainbowTheme } from './rainbowTheme';
import { customTheme } from './theme';

export const getCustomThemes = () => {
  return {
    getMui: getMuiThemeConfig(customTheme),
    rainbow: rainbowTheme,
  };
};
