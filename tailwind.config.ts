import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      spacing: {
        '57.5': '14.375rem',
        '25': '6.25rem',
        '18.5': '4.625rem',
        '16.75': '4.188rem',
        '13': '3.25rem',
        '4.5': '1.125rem',
        '3.75': '0.938rem',
      },
      colors: {
        'surface-brand': '#0C343D',
      },
      backgroundImage: {
        'button-default':
          'linear-gradient(266.66deg, #5CB170 -7.81%, #D6DE6D 118.14%);',
        hero: 'linear-gradient(180deg, #0C343D 0%, rgba(12, 52, 61, 0.97) 17.54%, rgba(12, 52, 61, 0.8) 49.91%, rgba(12, 52, 61, 0.5) 75.23%, rgba(12, 52, 61, 0.466667) 100%);',
      },
      padding: {
        inherit: 'inherit',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        down: {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
        up: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        down: 'down 10s linear infinite',
        up: 'up 10s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
