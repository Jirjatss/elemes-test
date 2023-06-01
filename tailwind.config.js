/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik, sans-serif"],
      },
      backgroundImage: {
        food: "url('./src/assets/image/bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
