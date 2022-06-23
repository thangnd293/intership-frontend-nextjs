/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#EE4C7E",
      secondary: "#FDEDF2",
      "primary-lighter": "#f6a5be",
      grey: "#818181",
      "light-grey": "#FAFAFA",
      white: "#fff",
      black: "#300F19",
    },
    fontSize: {
      "4xl": "48px",
      "3xl": "36px",
      "2xl": "30px",
      xxl: "26px",
      xl: "20px",
      lg: "16px",
      md: "14px",
      xs: "12px",
    },
    screens: {
      sm: "640px",
      md: "800px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },

  plugins: [],
};
