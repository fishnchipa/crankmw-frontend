import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '370px',
        'xmd': '738px'
      },
  		fontFamily: {
  			inter: ["var(--font-inter)"],
      },
      colors: {
  			'dark-midnight': '#2c2c2c',
        'west-orange': '#ffb30b',
        'golden': '#ffd12e',
        'sweet-orange': '#f5a329',
        'royal-blue': '#293043'
      },
      keyframes: {
        'grow-in': {
          '0%': {
            transform: 'scale(1.1)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        'slide-up': {
          '0%': {
            transform: 'scaleY(0)'
          },
          '60%': {
            transform: 'scaleY(0)'
          },
          '100%': {
            transform: 'scaleY(1)'
          },
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(100%)'
          },
          '60%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
        }
      },
      animation: {
        'grow-in': '0.5s grow-in ease-in-out',
        'slide-up': '1.5s slide-up ease-in-out',
        'slide-down': '1s slide-up ease-in-out',
        'slide-left': '1.5s slide-left ease-in-out'
      },
  		boxShadow: {
  			'land': '0px 5px 5px rgba(0, 0, 0, 0.1), 2px 5px 5px rgba(0, 0, 0, 0.1), 0px 5px 5px rgba(0, 0, 0, 0.1), 0px -1px 5px rgba(0,0,0, 0.1)'
      },
    },
  },
  plugins: [],
};
export default config;
