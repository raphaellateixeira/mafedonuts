/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fundo: "#FFF4F7",
        rosaClaro: "#FFE1EA",
        rosa: "#D1185E",
        rosaEscuro: "#B0124F",
        tinta: "#2B1620",
        tintaSuave: "#4A2A36",
        cinzaRosa: "#6B4C58",
        borda: "#E7C3CF",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
