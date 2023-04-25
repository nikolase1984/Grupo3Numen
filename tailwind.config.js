/** @type {import('tailwindcss').Config} */
module.exports = {


  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "celeste": "#e7eefb",
        "violeta": "#432344" ,
        "violet": '#432344',
        "red": '#FF2525',
        "grey": '#E7EEFB',
        "yellow": '#FFC03D'
      }
    },
  },


  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: '#432344',
        red: '#FF2525',
        grey: '#E7EEFB',
        yellow: '#FFC03D'
      },
      backgroundImage: {
      }
    },
  },

  plugins: [],
}

