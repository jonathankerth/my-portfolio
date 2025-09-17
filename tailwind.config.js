/** @type {import('tailwindcss').UserConfig} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'red-clay': '#b25042',
        'dark-gray': '#2B2B2B',
        'light-gray': '#3A3A3A',
        'soft-gray': '#6B6B6B',
        'soft-white': '#EDEDED',
        'dark-blue': '#1A2138',
        'medium-blue': '#2C3A63',
        'soft-blue': '#5A74DA',
        glass: 'rgba(255, 255, 255, 0.1)',
        'glass-hover': 'rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        float: 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '25%': {
            'background-size': '400% 400%',
            'background-position': 'left top',
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right top',
          },
          '75%': {
            'background-size': '400% 400%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        'pulse-subtle': {
          '0%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionProperty: {
        scale: 'transform',
      },
    },
  },
  variants: {
    extend: {
      scale: ['hover', 'group-hover'],
      backdropBlur: ['hover', 'focus'],
    },
  },
  plugins: [],
}
