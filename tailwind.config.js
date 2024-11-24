
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =  withMT({
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#6F51FF',
      'secondairy': '#b9b9b9',
      'text-primary': '#4f4f50',
      'text-scondairy': '#15508d',
      'blue-chart': '#5397C0',
      
      
      "background": "#CAE1EE",
      "black": "#000000",
      "background-dark": "#262846",
      "card-dark":"#343355"
    },
    extend: {},
  },
  plugins: [],
})

