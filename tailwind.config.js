/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: { 
      nunito: ["Nunito", "sans-serif"],   
    },
    extend: {
      colors: {
        dark: "#4B4A4A",
        'brand-gray-50': "#F7F7F7",
        'brand-gray-100': "#ECEDEC",
        'brand-gray-700': "#707070",
        "primary": "#33CCCC",      
        "brand-green": "#15AA09",      
        "brand-yellow": "#EAA92E",      
        "brand-red": "#EA2E2E",      
        "brand-blue": "#0066CC",      
      }, 
      boxShadow: {
        '3xl': '2px 2px 3px 0 rgba(0,0,0,0.16)'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
