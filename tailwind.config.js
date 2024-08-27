/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mark-pro': ['Mark Pro',],
      },
    },
  },
  plugins: [require('daisyui'),],
}