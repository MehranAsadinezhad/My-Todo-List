/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBrown: '#5a3e2b',
        lightBrown: '#ffebb3',
        primaryOrange: '#f4a226',
        secondaryOrange: '#e5771f',
        cyan: '#76c7ad',
      },
    },
  },
  plugins: [],
};
