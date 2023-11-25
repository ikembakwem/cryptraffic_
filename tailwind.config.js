/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1180px",
        heroCopy: "425px",
        heroContainer: "1142px",
      },
      minWidth: {
        ctaForm: "480px",
        auto: "auto",
      },
      colors: {
        gray: {
          60: "#5b616e",
          80: "var(--light-gray)",
        },
        line: "var(--line)",
        midnightSteel: "var(--midnight-steel)",
      },
      screens: {
        desktop: "1024px",
        largePhone: "560px",
      },
      lineHeight: {
        tighter: 1.15,
      },
    },
  },
  plugins: [],
};
