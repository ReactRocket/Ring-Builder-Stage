/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        "outer-space": "#464646",
        "sandy-brown": "#F8A066",
        "ruddy-brown": "#B5662D",
        "prussian-blue-light": "#804294",
        "prussian-blue-dark": "#00324A",
        "eerie-black": "#1E1E1E",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "heading-1-desktop": "48px",
        "heading-2-desktop": "42px",
        "heading-3-desktop": "36px",
        "heading-4-desktop": "30px",
        "heading-5-desktop": "26px",
        "heading-6-desktop": "22px",
      },
      lineHeight: {
        auto: "auto",
        "heading-6": "30px",
      },
      letterSpacing: {
        0: "0%",
      },
      fontFamily: {
        "tomato-grotesk": ["Tomato Grotesk", "sans-serif"],
        poppins: ["Poppins", "sans-serif,lato"],
      },
      fontWeight: {
        bold: 700,
        semibold: 600,
        medium: 500,
      },
      fontStyle: {
        bold: "bold",
        "semi-bold": "600",
        medium: "500",
      },
    },
  },
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,js}"],
  },
  plugins: [],
};
