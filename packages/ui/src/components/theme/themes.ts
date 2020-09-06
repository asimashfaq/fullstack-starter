import { ThemeConfig, ThemeName } from './types';

export const ligthTheme: ThemeConfig = {
  colors: {
    fill: '#FFFFFF',
    hover: ' #CCCCCC',
    border: '#FAFAFA',
    font: {
      inactive: '#BEBEBE',
      active: '#000000',
    },
  },
};

export const darkTheme: ThemeConfig = {
  colors: {
    fill: '#212121',
    border: '#3C3C3C',
    font: {
      active: '#FFFFFF',
      inactive: '#3C3C3C',
    },
  },
};

export const nightTheme: ThemeConfig = {
  colors: {
    fill: '#1B232C',
    border: '#343B47',
    font: {
      active: '#FFFFFF',
      inactive: '#63758D',
    },
  },
};

export const themesMap = {
  [ThemeName.light]: ligthTheme,
  [ThemeName.dark]: darkTheme,
  [ThemeName.night]: nightTheme,
} as const;
