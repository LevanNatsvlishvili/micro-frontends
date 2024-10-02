/* eslint-disable no-undef */

const customPlugins = require('./src/assets/commons/plugins');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: require('./src/assets/commons/theme/tailwind/screens'),
    spacing: require('./src/assets/commons/theme/tailwind/spacing'),
    inset: require('./src/assets/commons/theme/tailwind/spacing'),
    colors: require('./src/assets/commons/theme/tailwind/colors'),
    fontWeight: require('./src/assets/commons/theme/tailwind/fontWeight'),
    fontSize: require('./src/assets/commons/theme/tailwind/spacing'),
    borderRadius: require('./src/assets/commons/theme/tailwind/spacing'),
    lineHeight: require('./src/assets/commons/theme/tailwind/spacing'),
    letterSpacing: require('./src/assets/commons/theme/tailwind/spacing'),
    zIndex: require('./src/assets/commons/theme/tailwind/zIndex'),
    maxWidth: require('./src/assets/commons/theme/tailwind/spacing'),
    minWidth: require('./src/assets/commons/theme/tailwind/spacing'),
    maxHeight: require('./src/assets/commons/theme/tailwind/spacing'),
    minHeight: require('./src/assets/commons/theme/tailwind/spacing'),
    display: require('./src/assets/commons/theme/tailwind/display'),
    dropShadow: require('./src/assets/commons/theme/tailwind/dropShadow'),
    fontFamily: require('./src/assets/commons/theme/tailwind/fontFamily'),
  },
  plugins: customPlugins,
};
