/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat"],
        ralsteda: ["Ralsteda"],
        icomoon: ["icomoon"],
      },
      colors: {
        "main-blue": "#4ba1ee",
        "main-blue-opacity": "#4ba1ee33",
        "main-turquoise": "#57dbc0",
        "main-green": "#00bb9c",
        "main-hover-green": "#447b6e",
        "black-opacity": "rgba( 0, 0, 0, 0.5)",
        "green-opacity": "rgba( 0, 91, 41, 0.3)",
        aliceBlue: "#f5f9fa",
      },
    },
  },
  plugins: [],
};
