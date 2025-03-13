import { PaletteOptions, Theme, ThemeOptions } from '@mui/material';
import { Theme as RainbowTheme } from '@rainbow-me/rainbowkit';

declare module '@mui/material/styles' {
  interface TypeBackground {
    default: string;
    secondary: string;
  }

  interface Palette {
    title: {
      primary: string;
    };
    border: string;
  }

  interface ThemeOptions {
    borderRadius?: BorderRadius;
  }

  interface Theme {
    borderRadius: BorderRadius;
  }
}

interface BorderRadius {
  default: string;
  sm: string;
  md: string;
  lg: string;
}

type CustomMuiThemeColors = Partial<PaletteOptions>;

export interface CustomMuiTheme extends Partial<ThemeOptions> {
  dark: CustomMuiThemeColors;
  light: CustomMuiThemeColors;
  borderRadius: {
    default: string;
    sm: string;
    md: string;
    lg: string;
  };
}

export interface CustomThemes {
  getMui: Theme;
  rainbow: RainbowTheme;
}

export type ThemeMode = 'light' | 'dark' | 'system' | undefined;
