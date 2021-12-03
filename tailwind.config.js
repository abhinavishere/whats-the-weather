module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1E213A",
        "very-dark-blue": "#100E1D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
