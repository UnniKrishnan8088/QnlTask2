/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 11px 2px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        "store-banner": "url('/public/assets/store-banner.jpeg')",
      },
    },
  },
  plugins: [],
};
