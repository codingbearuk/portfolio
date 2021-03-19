import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    screens: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    breakpoints: number[];
    colors: {
      blue: string;
      lightblue: string;
      darkblue: string;
      grey: string;
      lightgrey: string;
      white: string;
      black: string;
      transparent: string;
      transparentDarkblue: string;
      semiTransparentDarkblue: string;
    };
    opacity: {
      0: number;
      25: number;
      50: number;
      75: number;
      100: number;
    };
    py: (value: number | string) => string;
  }
}
