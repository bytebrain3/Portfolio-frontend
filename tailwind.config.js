/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        jacatra: ['JACATRA', 'sans-serif'],
        starjhol: ['Starjhol', 'sans-serif'],
        noto : ["NotoSansWarangCiti", 'sans-serif'],
        bungee : ["BungeeOutline", 'sans-serif'],
        poppinsbold : ["Poppinsbold", 'sans-serif'],
      },
      colors: {
        burgundy: {
          100: '#FDE8E9',
          600: '#9B2335',
          700: '#7C1D2B',
          800: '#5D1621',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    
    ],
}