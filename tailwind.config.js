/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('public/images/heroimage.jpg')",
      },
      colors: {
        "primary-yellow": "#D0A534",
        "primary-gray-light": "#111725",
        "primary-gray-dark": "#0A0F1D",
        "section-title-gray": "#161B29",
        gray: "#C2C2C2",
      },
      dropShadow: {
        white: "1px 1px 1px rgba(255, 255, 255, 0.4)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
