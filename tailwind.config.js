/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#ef3926",
        appYellow: "#ECA458",
        appBlue: "#0C3469",
        appService1: "#FFEEDF",
        appService2: "#E8F8F5",
        appService3: "#F1F9FE",
      },
    },
  },
  plugins: [],
};
