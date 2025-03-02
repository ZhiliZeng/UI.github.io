/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      colors: {
        primary: "#000000",
        secondary: "#F2F2F2",
        tertiary: "#E5E5E5",
        four: "#979797",
        "blue-deep": "00008B",
        "background-color": "#FFF9EE",
        "font-color": "#151030",
        "button-color": "white",
        "button-active": "#B0ABA0",
        "button-active-font": "#FFFFFF",
        "blue-light": "#98c1d9",
        "blue-lighter": "#e0fbfc",
        "black-light": "#293241",
      },
      screens: {
        'xs': '320px',
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
      },
      boxShadow: {
        product: "rgba(0,0,0,0.08) 0 4px 15px",  
      },
      screens: {
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
      },
      gridTemplateColumns:{
        'layout': '60% 40%',
      },
      fontFamily:{
        'mainPageFont' : ['CourierNew', 'Courier', 'monospace']
      },
      rotate: {
        '30': '30deg',
      },
      scale: {
        '200': '2',
        '175': '1.75',
        '150': '1.5',
        '125': '1.25',
        '110': '1.1',
        '90': '0.9',
        '75': '0.75',
        '50': '0.5',
        '25': '0.25',
      },
      padding: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '45': '11.25rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily : {
        'base-font' : ['Montserrat']
      }
    },
  },
  plugins: [],
}

