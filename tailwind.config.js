/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('/images/home/background-home-mobile.jpg')",
        tablet: "url('/images/home/background-home-tablet.jpg')",
        desktop: "url('/images/home/background-home-desktop.jpg')",
      },
    },
  },
  variants: {
    extends: {},
  },
  plugins: [],
};
