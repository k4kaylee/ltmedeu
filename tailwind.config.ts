import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      animation: {
        'rotate': 'rotate 12s ease-in-out infinite',
        'circle-1': 'circle-1 12s ease-in-out infinite',
        'circle-2': 'circle-2 12s ease-in-out infinite',
        'circle-3': 'circle-3 12s ease-in-out infinite',
        'card-1': 'card-1 12s ease-in-out infinite',
        'card-2': 'card-2 12s ease-in-out infinite',
        'card-3': 'card-3 12s ease-in-out infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '17%': { transform: 'rotate(-120deg)' },
          '34%': { transform: 'rotate(-120deg)' },
          '51%': { transform: 'rotate(-240deg)'},
          '68%': { transform: 'rotate(-240deg)'},
          '85%': {transform: 'rotate(-360deg)' },
          '100%': {transform: 'rotate(-360deg)'}
        },
        'circle-1': {
          '0%': { 
            transform: 'rotate(0deg)', 
            maxHeight: '20rem', 
            maxWidth: '20rem', 
            left: '7rem', 
            bottom: '8rem', 
            backgroundColor: '#32c4c9' 
          },
          '17%': { 
            transform: 'rotate(120deg)', 
            maxHeight: '20rem', 
            maxWidth: '20rem', 
            left: '-1rem', 
            bottom: '10rem', 
            backgroundColor: '#32c4c990' 
          },
          '34%': { 
            transform: 'rotate(120deg)', 
            maxHeight: '20rem', 
            maxWidth: '20rem', 
            left: '-1rem', 
            bottom: '10rem', 
            backgroundColor: '#32c4c990' 
          },
          '51%': { 
            transform: 'rotate(240deg)', 
            maxHeight: '14rem', 
            maxWidth: '14rem', 
            left: '12rem', 
            bottom: '13rem', 
            backgroundColor: '#32c4c950' 
          },
          '68%': { 
            transform: 'rotate(240deg)', 
            maxHeight: '14rem', 
            maxWidth: '14rem', 
            left: '12rem', 
            bottom: '13rem', 
            backgroundColor: '#32c4c950' 
          },
          '85%': { 
            transform: 'rotate(360deg)', 
            maxHeight: '20rem', 
            maxWidth: '20rem', 
            left: '7rem', 
            bottom: '8rem', 
            backgroundColor: '#32c4c9' 
          },
          '100%': { 
            transform: 'rotate(360deg)', 
            maxHeight: '20rem', 
            maxWidth: '20rem', 
            left: '7rem', 
            bottom: '8rem', 
            backgroundColor: '#32c4c9' 
          }
        },
        'card-1': {
          '0%, 100%': { },
          '17%, 34%': {  top: '-9rem', left: '1rem' },
          '51%, 68%': { top: '-12rem', left: '-10rem' },
          '85%': { top: '5rem', left: '-7rem' }
        },
        'circle-2': {
          '0%': { 
            transform: 'rotate(0deg)', 
            maxHeight: '14rem', 
            maxWidth: '14rem', 
            backgroundColor: '#32c4c950', 
            left: '30rem', 
            bottom: '34rem'
          }, 
          '17%': { 
            transform: 'rotate(120deg)', 
            maxHeight: '20rem', 
            maxWidth: '20rem', 
            backgroundColor: '#32c4c9', 
            left: '25rem', 
            bottom: '38rem' 
          }, 
          '34%': { 
            transform: 'rotate(120deg)', 
            maxHeight: '20rem', 
            maxWidth: '20rem', 
            backgroundColor: '#32c4c9', 
            left: '25rem', 
            bottom: '38rem' 
          },
          '51%': { 
            transform: 'rotate(240deg)', 
            maxHeight: '20rem', 
            maxWidth: '20rem', 
            backgroundColor: '#32c4c990', 
            left: '31rem', 
            bottom: '40rem' 
          }, 
          '68%': { 
            transform: 'rotate(240deg)', 
            maxHeight: '20rem', 
            maxWidth: '20rem', 
            backgroundColor: '#32c4c990', 
            left: '31rem', 
            bottom: '40rem'
          },
          '85%': { 
            transform: 'rotate(360deg)', 
            maxHeight: '14rem', 
            maxWidth: '14rem', 
            backgroundColor: '#32c4c950', 
            left: '30rem', 
            bottom: '34rem'
          }, 
          '100%': { 
            transform: 'rotate(360deg)', 
            maxHeight: '14rem', 
            maxWidth: '14rem', 
            backgroundColor: '#32c4c950', 
            left: '30rem', 
            bottom: '34rem'
          }
        },
        'card-2': {
          '0%, 100%': { bottom: '2.5rem', left: '-8rem' },
          '17%, 34%': { bottom: '-7rem', left: '-8rem' },
          '51%, 68%': { bottom: '6rem', left: '1rem' },
          '85%': { bottom: '2.5rem', left: '-8rem' }
        },
        'circle-3': {
          '0%': { 
            transform: 'rotate(0deg)', 
            maxHeight: '20rem', 
            maxWidth: '20rem', 
            backgroundColor: '#32c4c990',
            left: '50%',
            bottom: '25rem'
          }, 
          '17%': { 
            transform: 'rotate(120deg)', 
            maxHeight: '14rem', 
            maxWidth: '14rem', 
            backgroundColor: '#32c4c950',
            left: '24rem',
            bottom: '33rem'
          },
          '34%': { 
            transform: 'rotate(120deg)', 
            maxHeight: '14rem', 
            maxWidth: '14rem', 
            backgroundColor: '#32c4c950',
            left: '24rem',
            bottom: '33rem'
          },
          '51%': { 
            transform: 'rotate(240deg)', 
            maxHeight: '20rem', 
            maxWidth: '20rem', 
            backgroundColor: '#32c4c9',
            left: '32rem',
            bottom: '36rem'
          }, 
          '68%': { 
            transform: 'rotate(240deg)', 
            maxHeight: '20rem', 
            maxWidth: '20rem', 
            backgroundColor: '#32c4c9',
            left: '32rem',
            bottom: '36rem'  
          },
          '85%': { 
            transform: 'rotate(360deg)', 
            maxHeight: '20rem', 
            maxWidth: '20rem', 
            backgroundColor: '#32c4c995',
            left: '50%',
            bottom: '25rem'
          }, 
          '100%': { 
            transform: 'rotate(360deg)', 
            maxHeight: '20rem', 
            maxWidth: '20rem', 
            backgroundColor: '#32c4c995',
            left: '50%',
            bottom: '25rem'
          }
        },
        'card-3': {
          '0%, 100%': { bottom: '7rem', left: '1rem' },
          '17%, 34%': { bottom: '2rem', left: '-10rem' },
          '51%, 68%': { bottom: '-7rem', left: '-5rem' },
          '85%': { bottom: '7rem', left: '1rem' }
        },
      },
    },
  },
  plugins: [],
};

export default config;
