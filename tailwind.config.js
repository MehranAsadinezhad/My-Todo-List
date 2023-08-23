/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBrown: '#5a3e2b',
        lightBrown: '#ffebb3',
        primaryPink: '#f2a2',
        secondaryPink: '#f2a',
        cyan: '#76c7ad',
      },
      fontFamily: {
        primary: 'righteous',
        secondary: 'QuickSand',
      },
    },
  },
  plugins: [],
};
