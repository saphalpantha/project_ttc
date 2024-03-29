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
    screens:{
      sm:'440px',
      md:'1010px',
      lg:'992px',
      xl:'1440px',
      ilandscape: {
        min: '740px',
        max:'1080px',
      },
      iportrait: {
        min: '810px',
        max: '1011px',
      },
    },
    
    extend: {
    },
  },
  plugins: [],
}


