/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{ 
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors:{
        'black' : '#000000', 
        'white' : '#ffffff',
        'darkblue' : '#1565c0',
        'cyanblue': '#00bcd4',
        'slate' : '#e2e8f0',
        'indigo1' : '#7986CB',
        'indigo2' : '#9FA8DA'
      }, 
      backgroundImage:{
        'hero': "url('../public/vectors/images/bg.png')"
      },
<<<<<<< HEAD
    },
    fontFamily:{
      "IBM" : 'IBM Plex Sans'
=======
      fontFamily:{
        "IBM" : ['IBM Plex Sans', 'sans-serif']
      }
>>>>>>> b4bf71bf3240c994200e1483e5b2721bf35205d2
    },
  },
  plugins: [],
}
