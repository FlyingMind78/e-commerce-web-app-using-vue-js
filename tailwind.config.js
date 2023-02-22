// tailwind.config.js
module.exports = {
  // purge: [],
  content: [
    "./index.html",
    "./src/App.vue",

    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./src/viewModel/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
