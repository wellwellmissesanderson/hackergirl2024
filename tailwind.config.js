/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'mono': ['Flappy'],
    },
    extend: {},
  },
  safelist: [
    {
      pattern: /(bottom|top|left|right|opacity)-.+/,
    },
  ],
  variants: {
    extend: {},
  },
  plugins: [],
}

