import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: [
          "var(--font-oswald)",
          "Impact",
          "Haettenschweiler",
          "sans-serif"
        ]
      },
      colors: {
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        subtle: "rgb(var(--subtle) / <alpha-value>)",
        line: "rgb(var(--line) / var(--line-alpha))"
      },
      animation: {
        shake: "shake 0.5s ease-in-out"
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-1px)" },
          "50%": { transform: "translate(0px, -3px)" },
          "75%": { transform: "translateX(-1px)" }
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      screens: {
        sm: "640px",
        md: "1024px",
        lg: "1600px",
        xl: "2600px"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
export default config;
