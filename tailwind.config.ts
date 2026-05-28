import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        cream: "var(--cream)",
        beige: "var(--beige)",
        "brown-light": "var(--brown-light)",
        gold: "var(--gold)",
        "brown-dark": "var(--brown-dark)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "steam": "steam 3s ease-out infinite",
        "sway": "sway 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        steam: {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0" },
          "15%": { opacity: "0.8" },
          "50%": { transform: "translateY(-50px) scaleX(1.5)", opacity: "0.4" },
          "100%": { transform: "translateY(-100px) scaleX(2)", opacity: "0" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
}

export default config
