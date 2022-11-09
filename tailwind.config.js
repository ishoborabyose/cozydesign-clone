/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shadow1: "#2d4850 0px 10px 24px 0px",
      },
      backgroundImage: {
        header: "url('/images/noise.jpeg')",
        bgBanner:
          "url('https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/607077c4d94a9d833a9cd183_stacked-waves-haikei.svg')",
        bgClient: "url('/images/noise1.webp')",
      },
      colors: {
        titlecolor: "#d4ac8e",
        btnColor: "#b55730",
        btnText: "#e4ded5",
        softBlack: "000009",
        textColor: "#223240",
        subtitleColor: "#c47d57",
        redTitle: "#d90f59",
        skyBlue: "#2d4850",
        orangeColor: "#b55730",
      },
      fontFamily: {
        sans: "font-regular",
        "font-bold": "font-bold",
        "font-semibold": "font-semiBold",
        "font-italic": "font-italic",
        "font-soft": "font-soft",
        "font-book": "font-book",
      },
    },
  },
  plugins: [],
};
