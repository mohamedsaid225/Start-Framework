/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'container': '1280px'
      }
    },
  },
  plugins: [],

  variants: {
    extend: {
      opacity: ['group-hover']
    },
  },
}
