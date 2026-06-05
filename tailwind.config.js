/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baby-pink': '#FFD6E8',
        'baby-blue': '#C7EEFF',
        'soft-white': '#FEFEFE',
        'cloud-pink': '#FFEEF5',
        'cloud-blue': '#E8F7FF',
        'accent-purple': '#B8A7D9',
        'text-dark': '#4A4A4A',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 1.5s infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'pulse-soft': 'pulse 4s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
