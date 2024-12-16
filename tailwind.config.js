/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        float: 'float 15s infinite',
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideIn: 'slideIn 0.8s ease-out forwards',
        slideUp: 'slideUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};