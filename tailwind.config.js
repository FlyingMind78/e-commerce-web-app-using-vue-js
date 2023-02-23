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
    extend: {
      colors: {
        violetLight: "#EC63B1",
        grayLight: "#9A9EA6",
        blueDark: "#2B557F",
        glass: "rgba(61, 26, 100, 0.22)",
        LC1: "#813F68",
        LC2: "#504879",
        LC3: "#1BB8B1",
        LC4: "#F9F0F5",
        LC5: "#9088B4",
        LC6: "#BCFFFC",
      },

      boxShadow: {
        "3ht":
          "12px 12px 16px 0 rgba(0, 0, 0, 0.25),-8px -8px 12px 0 rgba(255, 255, 255, 0.3)",
        gls: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
