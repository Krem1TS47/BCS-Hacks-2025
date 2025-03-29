const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ".flowbite-react\\class-list.json"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jua', 'sans-serif'],
        // You can also define it as a specific font if you want to apply it selectively
        jua: ['Jua', 'sans-serif'],
      },
    },
  },
  plugins: [flowbiteReact],
}