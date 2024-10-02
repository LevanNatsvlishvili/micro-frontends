import screens from './screens';
import spacing from './spacing';
import colors from './colors';
import fontWeight from './fontWeight';
import fontFamily from './fontFamily';
import zIndex from './zIndex';
import display from './display';
import dropShadow from './dropShadow';

import plugin from 'tailwindcss/plugin';

const tailwindConfig = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: screens,
    spacing: spacing,
    inset: spacing,
    colors: colors,
    fontWeight: fontWeight,
    fontSize: spacing,
    borderRadius: spacing,
    lineHeight: spacing,
    letterSpacing: spacing,
    zIndex: zIndex,
    maxWidth: spacing,
    minWidth: spacing,
    maxHeight: spacing,
    minHeight: spacing,
    display: display,
    dropShadow: dropShadow,
    fontFamily: fontFamily,
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('typed', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`typed${separator}${className}`)}:not(:focus):not(:placeholder-shown)`;
        });
      });
    }),
  ],
};

export default tailwindConfig;
