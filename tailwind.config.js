/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5ebff",
          100: "#e9d4ff",
          200: "#cfabff",
          300: "#b684ff",
          400: "#9b5aff",
          500: "#7f2fff",
          600: "#651ed8",
          700: "#4c15a6",
          800: "#350b73",
          900: "#200443",
        },
      },
      boxShadow: {
        "xl-glow":
          "0 0 40px rgba(127,47,255,0.35), inset 0 0 30px rgba(255,255,255,0.08)",
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at 50% 0%, rgba(127,47,255,0.25), transparent 35%), radial-gradient(circle at 0% 100%, rgba(255,94,0,0.25), transparent 40%)",
      },
      animation: {
        "slow-spin": "spin 20s linear infinite",
        "pulse-soft": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "float-3d": "float3d 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float3d: {
          "0%,100%": { transform: "translateY(0) rotateX(0deg) rotateY(0deg)" },
          "50%": { transform: "translateY(-8px) rotateX(6deg) rotateY(-6deg)" },
        },
      },
    },
  },
  plugins: [],
};
