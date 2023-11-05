/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "primary-blue": "#0A2B3C",
        "secondary-orange": "#E09132",
        "primary-white": "#F5F5F5",
        "primary-light-gray": "#D9D9D9",
        "primary-dark-gray": "#828282",
        "secondary-light-gray": "#919191",
        "secondary-light-light-gray": "#909090",
        "secondary-light-shade": "#F3ECDB",
        "secodary-light-light-shade": "#F4EEDF", 
        "primary-image-overlay-color": "#00000061",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1548px",
      },
      padding: {
        DEFAULT: "14px",
      },
    },
    fontFamily: {
      amithen: ["amithen", "sans-serif"],
      poppins: ["poppins", "sans-serif"],
    },
  },
  plugins: [],
};
