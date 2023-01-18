/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mons: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#2e294e",
        secandary: "#f0bcd5",
      },
    },
  },
  plugins: [],
};
