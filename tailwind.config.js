/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#060b18", 900: "#0a1020", 800: "#0f1830", 700: "#17233f" },
        brand: { yellow: "#ffae00", cyan: "#22d3ee" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        ring: { "0%": { transform: "scale(.6)", opacity: ".55" }, "100%": { transform: "scale(1.7)", opacity: "0" } },
        flow: { to: { strokeDashoffset: "-24" } },
      },
      animation: { ring: "ring 3.4s ease-out infinite", flow: "flow 2.4s linear infinite" },
    },
  },
  plugins: [],
};
