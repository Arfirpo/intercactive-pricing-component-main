/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundSize: {
      "50%": "50%",
      contain: "contain",
    },
    screens: {
      xs: "20rem",
      mbl: "23.4375rem",
      sm: "26.5625rem",
      md: "48rem",
      lg: "64rem",
      xl: "87.5rem",
    },
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        //Full Slider Bar
        softCyan: "hsl(174, 77%, 80%)",
        //Slider Backround
        strongCyan: "hsl(174, 86%, 45%)",
        //Discount Background
        lightGrayishRed: "hsl(14, 92%, 95%)",
        //Discount Text
        lightRed: "hsl(15, 100%, 70%)",
        //CTA Text
        paleBlue: "hsl(226, 100%, 87%)",
        //Pricing Component Background
        White: "hsl(0, 0%, 100%)",
        //Main Background
        veryPaleBlue: "hsl(230, 100%, 99%)",
        //Empty Slider Bar
        lightGrayishBlueEsb: "hsl(224, 65%, 95%)",
        //Toggle Background
        lightGrayishBlueTb: "hsl(223, 50%, 87%)",
        //Text
        grayishBlue: "hsl(225, 20%, 60%)",
        //Text & CTA Background
        darkDesaturatedBlue: "hsl(227, 35%, 25%)",
      },
    },
  },
  plugins: [],
};
