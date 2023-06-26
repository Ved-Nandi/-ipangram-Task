import dark from './dark';
import light from './light';

interface Theme {
  [key: string] : any;
}

export const themes: Theme = {
  dark,
  light,
};

export const ganrateTheme = (mode: string = 'light') => themes[mode];
