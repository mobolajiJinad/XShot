/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RuslanDisplay: ["Ruslan Display", "serif"],
        LuckiestGuy: ["Luckiest Guy", "serif"],
        Lora: ["Lora", "serif"],
      },
      backgroundImage: { mainBackground: "url(src/assets/MainBackground.png)" },
      listStyleImage: { LeftArrowList: "url(src/assets/LeftArrowList.png)" },
    },
  },
  plugins: [],
};
