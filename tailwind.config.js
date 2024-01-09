import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#2ecc71",
        accent: "#e74c3c",
        background: "#ecf0f1",
        text: "#34495e",
        success: "#27ae60",
        error: "#c0392b",
        overlay: "rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in forwards",
        "fade-out": "fadeOut 0.3s ease-in forwards",
      },
      keyframes: {
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
    screens: {
      sm: "640px",
      md: "750px",
      lg: "1024px",
      xl: "1334px",
    },
  },
  plugins: [flowbite()],
};
