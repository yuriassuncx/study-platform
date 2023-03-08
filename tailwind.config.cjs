/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/background.jpg')",
        'animation': "url('/img2.png')",
        'firstCloud': "url('/cloud_1.png')",
        'secondCloud': "url('/cloud_2.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
