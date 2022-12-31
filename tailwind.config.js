/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['"Poppins"', "cursive"],
      },
      colors: {
        main: "#232323",
        main2: "#f4f2f2",
        btn: "#F2C44C",
        btnh: "#edb528",
        kuning: "#FAC356",
        brown: "#C0AB8A",
        about: "#FFEED0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
