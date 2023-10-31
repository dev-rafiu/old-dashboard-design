import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background),<alpha-value>)",
        "backgound-secondary":
          "rgba(var(--background-secondary,<alpha-value>))",

        foreground: "rgba(var(--foreground),<alpha-value>)",
        "foreground-muted": "rgba(var(--foreground-muted),<alpha-value>)",

        secondary: "rgba(var(secondary),<alpha-value>)",

        "pie-chart-teal": "rgba(var(--pie-chart-teal),<alpha-value>)",
        "pie-chart-pastel-blue":
          "rgba(var(--pie-chart-pastel-blue),<alpha-value>)",
        "pie-chart-pink": "rgba(var(--pie-chart-pink),<alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
