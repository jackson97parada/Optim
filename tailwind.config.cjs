/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: { bgHeader: "url('/picture-header.jpg')" },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      shadowHeader: "0px 24px 12px -1px rgba(0,0,0,0.30)",
      shadowPicture: "-16px 17px 12px -1px rgba(0,0,0,0.25)",
      shadowPictureThree: "0px 17px 12px -1px rgba(0,0,0,0.25)",
      shadowService: "-2px 15px 15px 9px rgba(0,0,0,0.20)",
      shadowPartner: "-8px 13px 18px -3px rgba(0,0,0,0.3)",
      shadowContact: "-13px 14px 18px 3px rgba(0,0,0,0.3)",
    },
  },
  plugins: [],
};
