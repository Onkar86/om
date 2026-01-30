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
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#030303',
        surface: '#0a0a0a',
        primary: '#00f0ff', // Cyberpunk cyan
        secondary: '#bf00ff', // Neon purple
        accent: '#f59e0b', // Gold/Amber
        'glass-black': 'rgba(10, 10, 10, 0.7)',
        'glass-white': 'rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00f0ff' },
          '100%': { boxShadow: '0 0 20px #00f0ff, 0 0 10px #bf00ff' },
        }
      }
    },
  },
  plugins: [],
}