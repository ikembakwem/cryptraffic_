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
        line: "var(--line)",
        midnightSteel: "var(--midnight-steel)",
        primary: "var(--primary)",
        secondary: "var(--secondary-accent)",
        darkBlue: "var(--dark-blue)",
        lightBlue: "var(--light-blue)",
        darkGray: "var(--dark-gray)",
        lightGray: "var(--light-gray)",
        error: "var(--danger)",
        slateBlue: "var(--slate-blue)",
      },
      screens: {
        desktop: "1024px",
        largePhone: "560px",
      },
      lineHeight: {
        tighter: 1.15,
      },
      flexBasis: {
        zero: "0%",
      },
      width: {
        featureIcon: "72px",
      },
      height: {
        featureIcon: "72px",
      },
      boxShadow: {
        subtle: "rgba(218, 225, 233, 0.557) 0px 8px 16px",
      },
    },
  },
  plugins: [],
};
