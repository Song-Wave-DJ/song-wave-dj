/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins",
      },
      colors: {
        black: "#000B10",
        white: "#ffffff",
        purpal: "#FF00FF",
        transparent: "transparent",
        yellow: { DEFAULT: "#FFA200", light: "#FFA20033" },
        bloodRed: { DEFAULT: "#CF0000" },
        app: {
          DEFAULT: "#3CB5E5",
        },
        danger: "#FF0000",
        pending: "#f8d75dc1",
        primary: {
          DEFAULT: "#43D396",
          90: "#26CBED",
          80: "#9AEEFF",
          light: "#E1FAFF",
        },
        grey: {
          DEFAULT: "#BBBBBB",
          90: "#8B8B8B",
          80: "#C1C1C1",
          70: "#E9E9E9",
          light: "#F8F8F8",
          secondarylight: "#FAFAFA",
          extralight: "#EEEFF2",
        },
        green: {
          DEFAULT: "#00BC00",
          90: "#1CB200",
          80: "#A4FFA1",
          light: "#99BC99",
        },
        red: {
          DEFAULT: "#840000",
          90: "#B20000",
          80: "#FFA1A1",
          light: "#FBF2F2",
        },
      },
      fontSize: {
        x: "0.75rem", // 12px
        xxs: "0.875rem", // 14px
        xs: "1rem", //16px
        s: "1.125rem", //18px
        sm: "1.25rem", //20px
        m: "1.375rem", //22px
        l: "1.5rem", //24px
        xl: "1.625rem", //26px
        xxl: "2rem", //32px
        "3xl": "2.125rem", //34px
        "4xl": "2.25rem", //36px
        "5xl": "2.875rem", //46px
        "6xl": "3.375rem", //54px
        "7xl": "3.875rem", //62px
        "8xl": "4.625rem", //74px
        "9xl": "3.875rem", //62px
        "10xl": "5.125rem", //82px
      },
      screens: {},
    },
  },
  plugins: [],
};
