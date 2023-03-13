/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-nav": "#0B1D5D",
        "bg-footer": "#F6CD51",
        btn: "#FF5722",
      },
    },
  },
  plugins: [require("flowbite")],
};
