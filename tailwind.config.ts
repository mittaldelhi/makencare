import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0F7A4F",
          orange: "#F97316",
          mint: "#EAF7F0",
          paper: "#F8FAF9",
          ink: "#172B23"
        }
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(15, 122, 79, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
