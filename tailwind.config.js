/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      //MIN WIDTH
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      //  MAX WIDTH
      '2xlM': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xlM': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lgM': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mgM': {'max': '1000px'},    

      'mhM':{'max':'876px'},

      'mdM': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'smM': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'tsM' : {'max':'520px'},
      
      'xsM': {'max': '430px'},

      'zsM' : {'max':'408px'}

    },

  },
}