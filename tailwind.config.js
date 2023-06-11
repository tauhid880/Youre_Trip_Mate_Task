/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: "Inter, sans-serif",
      outfit: "Outfit, sans-serif",
    },
    extend: {
      colors: {
        blue1: "#2B59FF",
        blue2: "#BB2BFF",
      },
    },
  },
  plugins: [],
};
