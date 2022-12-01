/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#F9D72F",
                   
          "secondary": "#97DFFC",
                   
          "accent": "#B1B2FF",
                   
          "neutral": "#18182F",
                   
          "base-100": "#FFFFFF",
                   
          "info": "#3ABFF8",
                   
          "success": "#36D399",
                   
          "warning": "#FBBD23",
                   
          "error": "#F87272",
                   },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
} 
