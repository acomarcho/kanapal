/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        open: ['var(--font-open)']
      },
      colors: {
        background: '#1A1A1A',
        primary: `#FF6B6B`,
        text: '#FFFFFF',
        border: '#BFBFBF',
      }
    },
  },
  plugins: [],
}
