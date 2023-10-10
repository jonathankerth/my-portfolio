/** @type {import('tailwindcss').UserConfig} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'red-clay': '#b25042', // Adding a custom color to the palette
      },
      transitionProperty: {
        scale: 'transform', // Define a custom transition property
      },
    },
  },
  variants: {
    extend: {
      scale: ['hover', 'group-hover'], // Extend the scale variant
    },
  },
  plugins: [
    // Add any additional Tailwind CSS plugins here
  ],
}
