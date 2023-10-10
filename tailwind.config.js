/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      xs: '0px',
      // => @media (min-width: 0px) { ... }

      sm: '600px',
      // => @media (min-width: 600px) { ... }

      tablet: '780px',
      // => @media (min-width: 780px) { ... }

      md: '900px',
      // => @media (min-width: 900px) { ... }

      lg: '1200px',
      // => @media (min-width: 1200px) { ... }

      xl: '1536px'
      // => @media (min-width: 1536px) {... }
    },
    extend: {}
  },
  plugins: []
}
