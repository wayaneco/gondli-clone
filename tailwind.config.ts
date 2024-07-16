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
        '310': '77.5rem',
        '212.5': '53.125rem',
        '162.5': '40.625rem',
        '150': '37.5rem',
        '112.5': '28.125rem',
        '86.25': '21.563rem',
        '57.5': '14.375rem',
        '39.25': '9.798rem',
        '30': '7.5rem',
        '25': '6.25rem',
        '22.25': '5.5625rem',
        '18.5': '4.625rem',
        '17.25': '4.3125rem',
        '16.75': '4.188rem',
        '15': '3.75rem',
        '13': '3.25rem',
        '12.25': '3.063rem',
        '4.5': '1.125rem',
        '3.75': '0.938rem',
      },
      colors: {
        'surface-primary': '#F5F9FF',
        'surface-brand': '#0C343D',
        'border-primary': '#DBECF0',
        'border-feature': '#4B6F77',
        input: 'rgba(195, 195, 195, 0.3)',
        feature: '#3A626B',
      },
      fontSize: {
        '2.25xl': '1.625rem',
        '4.25xl': '2.5rem',
      },
      backgroundImage: {
        'button-default':
          'linear-gradient(266.66deg, #5CB170 -7.81%, #D6DE6D 118.14%);',
        'hero-gradient':
          'linear-gradient(180deg, #0C343D 0%, rgba(12, 52, 61, 0.97) 17.54%, rgba(12, 52, 61, 0.8) 49.91%, rgba(12, 52, 61, 0.5) 75.23%, rgba(12, 52, 61, 0.466667) 100%);',
        'feature-gradient':
          'linear-gradient(180deg, rgba(58, 98, 107, 0) 0%, rgba(58, 98, 107, 0.9) 64.83%, #3A626B 100%);',
      },
      backdropBlur: {
        '2.5xl': '58px',
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
