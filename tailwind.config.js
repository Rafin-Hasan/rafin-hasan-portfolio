/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f6fe',
          100: '#ddecfd',
          200: '#c2ddfb',
          300: '#98c6f8',
          400: '#67a4f3',
          500: '#4181ed',
          600: '#2b65e1',
          700: '#224fce',
          800: '#2041a7',
          900: '#1e3884',
          950: '#162453',
        },
        navy: {
          800: '#0f172a',
          900: '#0b1120',
          950: '#060913',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
