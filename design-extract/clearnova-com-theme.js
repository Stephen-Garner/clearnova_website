// React Theme — extracted from https://clearnova.com/
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
 *   };
 *   fonts: {
    body: string;
    mono: string;
 *   };
 *   fontSizes: {
    '12': string;
    '14': string;
    '16': string;
    '22': string;
    '13.3333': string;
 *   };
 *   space: {
    '1': string;
    '16': string;
    '23': string;
    '40': string;
    '48': string;
    '56': string;
    '193': string;
 *   };
 *   radii: {
    xs: string;
    md: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#ffffff",
    "neutral200": "#595959",
    "neutral300": "#161616",
    "neutral400": "#474747",
    "neutral500": "#e2e2e2",
    "neutral600": "#f6f6f6",
    "neutral700": "#826c6c",
    "neutral800": "#767676",
    "neutral900": "#c1c1c1"
  },
  "fonts": {
    "body": "'Arial', sans-serif",
    "mono": "'monospace', monospace"
  },
  "fontSizes": {
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "22": "22px",
    "13.3333": "13.3333px"
  },
  "space": {
    "1": "1px",
    "16": "16px",
    "23": "23px",
    "40": "40px",
    "48": "48px",
    "56": "56px",
    "193": "193px"
  },
  "radii": {
    "xs": "2px",
    "md": "7px",
    "full": "48px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0.3) 0px 2px 6px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "background": {
      "default": "#ffffff",
      "paper": "#f6f6f6"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#474747"
    }
  },
  "typography": {
    "fontFamily": "'Times', sans-serif",
    "h3": {
      "fontSize": "22px",
      "fontWeight": "400",
      "lineHeight": "27.5px"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "normal"
    },
    "body2": {
      "fontSize": "12px",
      "fontWeight": "400",
      "lineHeight": "18px"
    }
  },
  "shape": {
    "borderRadius": 7
  },
  "shadows": [
    "rgba(0, 0, 0, 0.2) 0px 0px 5px 0px",
    "rgb(128, 128, 128) 0px 0px 5px 0px",
    "rgba(0, 0, 0, 0.3) 0px 2px 6px 0px"
  ]
};

export default theme;
