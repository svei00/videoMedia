import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { primary: {
                  light: "#BF00FF", // Electric Purple
                  Default: "#7C3AED", // Purple
                  dark: "#0D0D0D",
                  gold: "#D4C19C",
                  silver: "#C0C0C0",
                  text: "#333333", // Dark Gray
                  orange: "#D2691E" // Burnt Orange
                }, 
                secondary: {
                  light: "#7DF9FF", // Electric Blue 
                  Default: "#BDBDBD",
                  dark: "#828282"}, 
                tertiary: {
                  light: "#39FF14", // Neon Green
                  Default: "#E0E0E0",
                  dark: "#C4C4C4"} },
                accent: "#FF00FF", // Neon Pink
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
