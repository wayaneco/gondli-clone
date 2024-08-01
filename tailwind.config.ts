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
        '258': '64.5rem',
        '212.5': '53.125rem',
        '184.5': '46.125rem',
        '172': '43rem',
        '162.5': '40.625rem',
        '157.75': '39.4375rem',
        '150': '37.5rem',
        '125': '31.25rem',
        '121.75': '30.4375rem',
        '121.75/50': '15.21875rem',
        '112.5': '28.125rem',
        '86.25': '21.563rem',
        '57.5': '14.375rem',
        '39.25': '9.798rem',
        '35.5': '8.875rem',
        '30': '7.5rem',
        '27.25': '6.8125rem',
        '25': '6.25rem',
        '22.25': '5.5625rem',
        '18.5': '4.625rem',
        '17.25': '4.3125rem',
        '16.75': '4.188rem',
        '15': '3.75rem',
        '13.75': '3.4375rem',
        '13': '3.25rem',
        '12.25': '3.063rem',
        '4.5': '1.125rem',
        '3.75': '0.938rem',
        '1.75': '0.4375rem',
        'px.62': '1.62px',
        'px.5': '1.5px',
      },
      colors: {
        'surface-primary': '#F5F9FF',
        'surface-brand': '#0C343D',
        'surface-success': '#5CB170',
        'surface-error': '#D56C6C',
        'situational-primary': '#124C59',
        'situational-secondary': '#A9E2EF',
        'border-primary': '#DBECF0',
        'border-feature': '#4B6F77',
        'button-disabled': '#155B6B',
        'text-primary': '#000B19',
        'text-secondary': 'rgba(135, 142, 151, 1)',
        'text-disabled': '#196D80',
        input: 'rgba(195, 195, 195, 0.3)',
        'input-solid': 'rgba(236, 240, 245, 1)',
        feature: '#3A626B',
        'dialog-background': '#000B1980',
      },
      backgroundImage: {
        'coming-soon': "url('/images/coming-soon.png')",
        'button-default':
          'linear-gradient(266.66deg, #5CB170 -7.81%, #D6DE6D 118.14%);',
        'hero-gradient':
          'linear-gradient(180deg, #0C343D 0%, rgba(12, 52, 61, 0.97) 17.54%, rgba(12, 52, 61, 0.8) 49.91%, rgba(12, 52, 61, 0.5) 75.23%, rgba(12, 52, 61, 0.466667) 100%);',
        'feature-gradient':
          'linear-gradient(180deg, rgba(58, 98, 107, 0) 0%, rgba(58, 98, 107, 0.9) 64.83%, #3A626B 100%);',
        'glass-border':
          'linear-gradient(156.52deg, rgba(255, 255, 255, 0.25) 2.12%, rgba(255, 255, 255, 0.02) 57.18%, rgba(255, 255, 255, 0.02) 65.84%, rgba(255, 255, 255, 0.1) 93.02%)',
      },
      fontSize: {
        '2.25xl': '1.625rem',
        '2.5xl': '1.75rem',
        '4.25xl': '2.5rem',
      },
      borderRadius: {
        '1.5sm': '0.25rem',
        '1.5lg': '0.625rem',
      },
      padding: {
        inherit: 'inherit',
      },
      backdropBlur: {
        '2.5xl': '58px',
      },
      borderWidth: {
        '1.5': '1.5px',
      },
      screens: {
        xs: '600px',
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
        'down-mobile': 'down 16.5s linear infinite',
        up: 'up 10s linear infinite',
        'up-mobile': 'up 16.5s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
