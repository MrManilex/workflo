/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*',
    './src/pages/**/*'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
