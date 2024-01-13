/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#978CD0',
        'secondary': '#DCD9EF',
        'background': '#fff',
        'textPrimary': '#000',
        'textSecondary': '#666666',
      },
      fontFamily: {
        'poppins': 'Poppins-Regular',
      }
    },
  },
  plugins: [],
}

