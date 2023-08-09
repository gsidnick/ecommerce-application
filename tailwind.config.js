/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': 'rgb(255, 255, 255)',
      'white60': 'rgba(255, 255, 255, 0.6)',
      'gray-dark': '#242424',
      'orange-main': '#CC7408',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    screens: {
      '2sm': '320px',
      // => @media (min-width: 320px) { ... }
      sm: '480px',
      // => @media (min-width: 480px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
