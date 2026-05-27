/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFBF9',  /* Warm cream primary background */
          100: '#FAF8F5', /* Slightly darker cream */
        },
        lavender: {
          50: '#F5F3FF',
          100: '#EBE8F9',
          200: '#D6CFFE',
          300: '#B0A3FD',
          500: '#7C73C9', /* Primary Lavender theme color */
          600: '#645AA8',
        },
        pink: {
          50: '#FFF5F6',
          100: '#FCEAEB',
          200: '#F9D4D7',
          500: '#D48D93', /* Blush Pink */
          600: '#B97177',
        },
        mint: {
          50: '#F0FDF4',
          100: '#E6F5EC',
          200: '#C7EBD4',
          500: '#4E9A6F', /* Mint Green */
          600: '#3D7D58',
        },
        blue: {
          50: '#F0F9FF',
          100: '#E5F4FC',
          200: '#C7E7FA',
          500: '#4A90E2', /* Sky Blue */
          600: '#3578C2',
        },
        slate: {
          850: '#232226',
          800: '#2C2B30', /* Dark slate for ultimate readability */
          600: '#5A5960', /* Muted slate */
          400: '#8C8A94', /* Very muted slate */
          200: '#E1E0E3',
        },
        mural: {
          charcoal: '#2C2C2C', /* Lamp Black */
          black: '#1A1A1A',
          vermilion: '#A63D2B', /* Red Ochre */
          red: '#A63D2B', 
          gold: '#E3A857', /* Yellow Ochre */
          darkGold: '#D4AF37',
          peacock: '#4A6D47', /* Leaf Green instead of blue, as true Panchavarna has no blue */
          leaf: '#4A6D47',
          ivory: '#F5F5F5', /* Lime White */
          antique: '#C88D4B'
        }
      },
      boxShadow: {
        'neumorphic': '6px 6px 16px rgba(163, 177, 198, 0.2), -6px -6px 16px rgba(255, 255, 255, 0.8)',
        'neumorphic-sm': '3px 3px 8px rgba(163, 177, 198, 0.15), -3px -3px 8px rgba(255, 255, 255, 0.8)',
        'neumorphic-inset': 'inset 3px 3px 6px rgba(163, 177, 198, 0.15), inset -3px -3px 6px rgba(255, 255, 255, 0.8)',
        'glass': '0 8px 32px 0 rgba(124, 115, 201, 0.04)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        cinzel: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
