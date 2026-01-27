/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2f486d",
        primaryLight: "#3d5a85",
        primaryDark: "#223148",
        dark: "#223148",
        accent: "#f3eac0",
        neutral: "#d2c7b8",
        cartoon: {
          blue: "#2f486d",
          lightBlue: "#3d5a85",
          cream: "#f3eac0",
        },
      },
      borderRadius: {
        cartoon: "1.5rem",
        cartoony: "2rem",
      },
      boxShadow: {
        cartoon: "0 8px 16px rgba(47, 72, 109, 0.15), 4px 4px 0px rgba(63, 90, 133, 0.2)",
        cartoony: "0 12px 24px rgba(47, 72, 109, 0.2), 6px 6px 0px rgba(63, 90, 133, 0.15)",
      },
    },
  },
  plugins: [],
}

