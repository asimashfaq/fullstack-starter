import { ReactNode } from 'react';

export enum ThemeName {
  light = 'light',
  dark = 'dark',
  night = 'night',
}

export type ThemeNameType = keyof typeof ThemeName;

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export interface ThemeConfig {
  colors: {
    fill: string;
    hover: string;
    border: string;
    font: {
      inactive: string;
      active: string;
    };
  };
}

export interface ThemeProviderProps {
  theme: ThemeNameType;
  custom?: DeepPartial<ThemeConfig>;
  children: ReactNode;
}
