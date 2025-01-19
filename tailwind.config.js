/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',  // Mobile landscape
      'md': '768px',  // Tablet
      'lg': '1024px', // Desktop
      'xl': '1280px', // Large desktop
      '2xl': '1536px' // Extra large screens
    },
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e'
        },
        accent: {
          500: '#22c55e', // Success green
          600: '#dc2626', // Error red
          700: '#eab308'  // Warning yellow
        },
        neutral: {
          50: '#f8fafc',
          900: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        'h1': ['2.5rem', {
          lineHeight: '1.2'
        }],
        'h2': ['2rem', {
          lineHeight: '1.3'
        }],
        'h3': ['1.75rem', {
          lineHeight: '1.4'
        }],
        'base': ['1rem', {
          lineHeight: '1.5'
        }],
        'sm': ['0.875rem', {
          lineHeight: '1.5'
        }],
        'xs': ['0.75rem', {
          lineHeight: '1.5'
        }]
      }
    },
  },
  plugins: [],
}
