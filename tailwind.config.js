/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      minHeight: {
        'full-dynamic-display': '100svh',
      },
      gridTemplateColumns: {
        'home-grid': 'minmax(13.75rem, 18rem) 1fr',
      },
    },
  },
  plugins: [],
}
