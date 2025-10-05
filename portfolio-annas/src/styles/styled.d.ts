import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      accent: string;
    };
    fonts: {
      main: string;
      secondary: string;
    };
    gradients: {
      pinkBlue: string;
      cyanPink: string;
    };
  }
}
