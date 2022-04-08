module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
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
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-100%)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
        translateRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in forwards',
        slideIn: 'translateRight 0.4s ease forwards',
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
  plugins: [require('@tailwindcss/typography')],
};
