/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: { bgHeader: "url('../../public/picture-header.png')" },
    },
  },
  plugins: [],
};
