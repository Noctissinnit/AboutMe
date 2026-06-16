/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        primary: "#2f486d",
        primaryLight: "#3d5a85",
        primaryDark: "#1e2c41",
        dark: "#18181b",
        accent: "#FEE135", // Cyber Yellow
        neutral: "#f4f4f5",
        "cyber-yellow": "#FEE135",
        "cyber-orange": "#ff5e36",
        "cyber-blue": "#3b82f6",
        "cyber-green": "#4ade80",
        "cyber-pink": "#f472b6",
      },
      borderWidth: {
        "3": "3px",
        "4": "4px",
        "6": "6px",
      },
      borderRadius: {
        cartoon: "1rem",
        cartoony: "1.5rem",
      },
      boxShadow: {
        cartoon: "4px 4px 0px #18181b",
        cartoony: "6px 6px 0px #18181b",
        brutalist: "8px 8px 0px #18181b",
      },
    },
  },
  plugins: [],
}

