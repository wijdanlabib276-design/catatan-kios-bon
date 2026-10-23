import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Force light mode (tidak ikuti dark mode OS)
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderWidth: {
        "3": "3px",
      },
      animation: {
        "bounce-in": "bounce-in 0.35s ease-out both",
        "fade-in": "fade-in 0.2s ease-out both",
      },
      keyframes: {
        "bounce-in": {
          "0%": { opacity: "0", transform: "translateY(16px) scale(0.95)" },
          "60%": { transform: "translateY(-4px) scale(1.02)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "scale(0.97)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
