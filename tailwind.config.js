/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          link: "#0075F2",
        }
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        title: ['VT323', 'monospace'],
        mono: ['CutiveMono', 'monospace'],
      },
    },
  },
  plugins: [],
}