/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        newDarkGreen: "#007292",
        newLightGreen: "#ACE2E2",
        footerGreen: "#003B4D",
        textGreen: "#ACE2E2",
      },
    },
  },
  plugins: [],
};
