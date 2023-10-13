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
      },
      transitionProperty: {
        scale: 'transform',
      },
    },
  },
  variants: {
    extend: {
      scale: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}
