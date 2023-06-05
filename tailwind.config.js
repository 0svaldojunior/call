import { borderRadius, colors, fontFamily, fontSize, lineHeight } from '@drofens/tokens'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      lineHeight,
      borderRadius,
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
