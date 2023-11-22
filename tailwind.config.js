/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1180px",
      },
      colors: {
        gray: {
          60: "var(--gray-60)",
        },
        line: "var(--line)",
      },
      screens: {
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};
