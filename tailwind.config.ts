import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config = {
  content: [
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx,js,jsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {},
  },
  darkMode: 'class',

  plugins: [require('tailwindcss-animate'), nextui()],
} satisfies Config;

export default config;
