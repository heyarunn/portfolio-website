import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0613",
        surface: "#140b24",
        card: "#1b1232",
        border: "#2d2047",
        brand: {
          DEFAULT: "#7441d3",
          glow: "#9f6ff0",
        },
        accent: "#e879f9",
        muted: "#a9a2c7",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(116,65,211,0.55)",
        card: "0 10px 40px -20px rgba(0,0,0,0.8)",
      },
      keyframes: {
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "spin-slow": "spinSlow 40s linear infinite",
        "spin-slower": "spinSlow 70s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee 35s linear infinite reverse",
      },
    },
  },
  plugins: [],
};

export default config;
