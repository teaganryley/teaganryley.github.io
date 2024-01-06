import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      accent: string;
      muted: string;
    };
    typeScale: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      p: string;
      small: string;
    };
    fontFamily: {
      main: string;
    };
  }
}
