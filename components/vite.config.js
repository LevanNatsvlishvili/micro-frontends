/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import Basic from './src/components/Basic/Expose';
import Complex from './src/components/Complex';
import Icons from './src/assets/icons';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    federation({
      name: 'remoteComponents',
      filename: 'remoteEntry.js',
      exposes: {
        ...Basic,
        ...Complex,
        ...Icons,
        './AntDConfigProvider': './src/assets/commons/theme/antD/ConfigProvider',
        './router': './src/routing',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.3.1',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.3.1',
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: '^6.25.1',
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  esbuild: {
    supported: {
      'top-level-await': true, //browsers can handle top-level-await features
    },
  },
  server: {
    port: 4001,
  },
  build: {
    cssCodeSplit: false, // All CSS will be bundled into a single file
  },
});
