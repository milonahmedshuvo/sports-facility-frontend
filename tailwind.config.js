/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F1021",
        secondary: "#ff4960",
        text: "#c1c1c1"
      },
      fontFamily: {
        'mark-pro': ['Mark Pro',],
        'inter': ["Inter, sans-serif"]
      },
    },
  },

  plugins: [require('daisyui'),],
}