
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =  withMT({
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#758BFD',
      'secondairy': '#b9b9b9',
      'text-primary': '#646464',
      'text-scondairy': '#EFF1FF',
      'text': '#353536',
      "shadow":"#DADAE3",
      "background": "#F9F9FD",



      "black": "#000000",
      "background-dark": "#1E2130",
      "card-dark": "#343355",
      "primary-dark": "#879AFF",
      "secondairy-dark":"#5E6480",
      "text-primary-dark": "#F2F3F9",
      "secondairy-dark":"#898FAC"
    },
    extend: {},
  },
  plugins: [],
})

