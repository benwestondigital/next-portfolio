import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-4deg)',
          },
          '50%': {
            transform: 'rotate(4deg)',
          },
        },
        spin360: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '85%': { transform: 'rotate(410deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20%)' },
          '100%': { opacity: '1', transform: 'translateY(0%)' },
        },
        translateRight: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '90%': { opacity: '1', transform: 'translateX(12%)' },
          '100%': { opacity: '1', transform: 'translateX(0%)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        wiggleShort: 'wiggle 0.3s ease-in-out',
        fadeIn: 'fadeIn 1.1s ease-in forwards',
        fadeInDown: 'fadeIn 1s ease-in forwards',
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
        slideIn: 'translateRight 0.8s ease-out forwards',
        spin360: 'spin360 1s ease forwards',
      },
    },
    fontFamily: {
      sans: ['IBM Plex Sans, sans-serif'],
    },
    container: {
      center: true,
      screens: {
        xl: '1024px',
        '2xl': '1024px',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};

export default config;
