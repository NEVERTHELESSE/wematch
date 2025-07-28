/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,jsx  }", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      tertiary: "var(--tertiary)",
      },
  },
  },
  plugins: [],
};
