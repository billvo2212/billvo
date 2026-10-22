import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#1e1f1c",
          soft: "#272822",
          raised: "#2d2e28",
          overlay: "#3e3d32",
        },
        fg: {
          DEFAULT: "#f8f8f2",
          dim: "#cfcfc2",
          muted: "#75715e",
        },
        mono: {
          pink: "#f92672",
          orange: "#fd971f",
          yellow: "#e6db74",
          green: "#a6e22e",
          blue: "#66d9ef",
          purple: "#ae81ff",
          red: "#f92672",
        },
        border: "#3e3d32",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.97" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        flicker: "flicker 3s infinite",
        fadeIn: "fadeIn 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
