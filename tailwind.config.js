/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        forest: '#0B3D2E',
        moss: '#17624B',
        cream: '#F7F3E8',
        gold: '#D7A94B'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(11, 61, 46, 0.10)'
      }
    }
  },
  plugins: []
};
