/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#260033",
        page: "#15031B",
        card: "#2C1831",
        card_hover: "#1F1123",
        "default-text": "#F1E9F3",
        "blue-accent": "#24532454",
        "blue-accent-hover": "#er2345w",
      },
    },
  },
  plugins: [],
};
