import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1A1A2E",
          dark: "#0F0F1E",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C547",
        },
      },
    },
  },
  plugins: [],
};

export default config;
