/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Primary Colors */
        ModerateViolet: 'hsl(263, 55%, 52%)',
        VeryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
        VeryDarkBlackishBlue: 'hsl(219, 29%, 14%)',
        WhiteCustom: 'hsl(0, 0%, 100%)',
        /* Neutral Colors */
        LightGray: 'hsl(0, 0%, 81%)',
        LightGrayishBlue: 'hsl(210, 46%, 95%)',
      },
      fontFamily: {
        'BarlowSemiCondensed': ['Barlow Semi Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}

