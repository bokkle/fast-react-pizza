/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  //theme overrides tailwind defaults
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    //extend adds to the default
    extend: {
      colors: {
        pizza: '#123456',
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
