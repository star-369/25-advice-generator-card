/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-cyan": "var(--light-cyan)",
        "neon-green": "var(--neon-green)",
        "grayish-blue": "var(--grayish-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "dark-blue": "var(--dark-blue)",
      },
      fontFamily: {
        manrope: "var(--manrope)",
      },
      boxShadow: {
        glow: "0 0 50px 15px var(--neon-green)",
      },
    },
  },
  plugins: [],
};
