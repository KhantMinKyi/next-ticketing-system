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
        nav: "#70BFC8",
        page: "#2B1A2F",
        card: "#47566a",
        "card-hover": "#3452345",
        "default-text": "#F1E9F3",
        "blue-accent": "#24532454",
        "blue-accent-hover": "#er2345w",
      },
    },
  },
  plugins: [],
};
