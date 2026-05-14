import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#000a1c",
          900: "#001430",
          800: "#002855",
          700: "#0a3a73",
          100: "#aac7fd"
        },
        green: {
          600: "#2b6c00",
          500: "#3e9a07",
          400: "#7fd13a",
          300: "#a8f37e"
        },
        ink: { DEFAULT: "#0b0d10", 2: "#111516", 3: "#181c1f" }
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      maxWidth: { container: "1280px" }
    }
  },
  plugins: []
} satisfies Config;
