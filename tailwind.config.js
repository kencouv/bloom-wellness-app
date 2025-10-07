/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bloom nature-inspired color palette
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b3a3',
          400: '#7d917d',
          500: '#5f7a5f', // Primary sage green
          600: '#4a6049',
          700: '#3d4e3c',
          800: '#333f32',
          900: '#2b352a',
        },
        peach: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad9c0',
          300: '#f6be95',
          400: '#f09968',
          500: '#e87a47', // Primary peach
          600: '#d95d32',
          700: '#b54528',
          800: '#943827',
          900: '#783023',
        },
        lavender: {
          50: '#f8f6fb',
          100: '#f2edf8',
          200: '#e6dcf2',
          300: '#d4c2e8',
          400: '#bc9dd9',
          500: '#a378ca', // Primary lavender
          600: '#8b5fb5',
          700: '#744e96',
          800: '#614179',
          900: '#523762',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfbf6',
          200: '#fbf6ed',
          300: '#f8f0de',
          400: '#f3e7ca',
          500: '#ecdab2', // Primary cream
          600: '#dcc493',
          700: '#c8a772',
          800: '#a4895e',
          900: '#87724c',
        },
        // Emotion state colors
        happy: '#f09968', // sunlit peach
        sad: '#bc9dd9', // muted lavender  
        anxious: '#8faabb', // soft blue-gray
        calm: '#f3e7ca', // warm cream
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite',
        'grow': 'grow 0.6s ease-out',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        'gentle-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.9' },
        },
        'grow': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}