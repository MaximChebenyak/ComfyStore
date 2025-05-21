///**/ @type {import('tailwindcss').Config} */
//export default {
// content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//theme: {
//  extend: {},
//},
//plugins: [require('@tailwindcss/typography'), require('daisyui')],
//};

/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dracula'],
  },
};
