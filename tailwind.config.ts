import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#05070a", coal: "#0d1117", steel: "#1a212b", volt: "#2d7bff", acid: "#b9ff2e" },
      fontFamily: { sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"], mono: ["var(--font-geist-mono)", "monospace"] },
    },
  },
  plugins: [],
};
export default config;
