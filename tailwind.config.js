/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RuslanDisplay: ["Ruslan Display", "serif"],
        LuckiestGuy: ["Luckiest Guy", "serif"],
        Lora: ["Lora", "serif"],
        MacondoSwashCaps: ["Macondo Swash Caps", "serif"],
        LuxuriousScript: ["Luxurious Script", "serif"],
      },
      backgroundImage: {
        mainBackground: "url(src/assets/MainBackground.png)",
        ContactMainTop: "url(src/assets/ContactMainTop.png)",
      },
      listStyleImage: { LeftArrowList: "url(src/assets/LeftArrowList.png)" },
    },
  },
  plugins: [],
};
