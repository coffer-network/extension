import { defineConfig } from '@pandacss/dev';

import { globalCss } from './theme/global/global';

export default defineConfig({
  preflight: true,

  include: [
    './node_modules/@coffer.network/ui/dist-web/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  exclude: [],

  prefix: 'leather',

  presets: ['@coffer.network/panda-preset'],

  studio: { logo: '💼' },

  jsxFramework: 'react',

  strictTokens: false,

  outdir: 'coffer-styles',
  outExtension: 'js',
  minify: true,
  globalCss,
});
