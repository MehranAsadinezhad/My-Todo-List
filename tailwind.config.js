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
        secondaryPink: '#f2a5',
      },
      fontFamily: {
        primary: 'righteous',
        secondary: 'QuickSand',
      },
      screens: {
        phone: '480px',

        tablet: '778px',

        laptop: '1279px',
      },
    },
  },
  plugins: [],
};
