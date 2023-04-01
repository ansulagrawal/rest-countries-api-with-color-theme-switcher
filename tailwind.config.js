/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      darkBlue: "hsl(209, 23%, 22%)",
      "veryDarkBlue-1": "hsl(207, 26%, 17%)",
      "veryDarkBlue-2": "hsl(200, 15%, 8%)",
      darkGray: "hsl(0, 0%, 52%)",
      veryLightGray: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: { nunito: ["Nunito Sans", "sans-serif"] },
  },
  fontWeight: { light: "300", semiBold: "600", extraBold: "800" },
};
export const plugins = [];
