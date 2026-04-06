/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        kitchen: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635', // лаймовый
          500: '#84cc16',
          600: '#65a30d',
        },
        bathroom: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa', // голубой
          500: '#3b82f6',
          600: '#2563eb',
        },
        pets: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15', // жёлтый
          500: '#eab308',
          600: '#ca8a04',
        },
        medicine: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // тёмно-зелёный
          600: '#16a34a',
          700: '#15803d',
        }
      },
      borderRadius: {
        'card': '20px',
        'button': '16px',
      }
    },
  },
  plugins: [],
}
