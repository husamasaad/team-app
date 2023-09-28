
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : '#232241',
        "secondary" : '#3B82F6'
      },
      backgroundImage: {
        "hero-bg": 'url("/hero-bg.jpg")',
        "hero-bg-sm": 'url("/hero-bg-sm.png")',
        "hero-bg-md": 'url("/hero-bg-md.png")',
      },
    },
  },
  plugins: [
  ],
}
