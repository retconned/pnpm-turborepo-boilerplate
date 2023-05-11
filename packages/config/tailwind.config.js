/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require("../ui/tailwind.config"),
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    // './app/**/*.{js,ts,jsx,tsx}',
    // './pages/**/*.{js,ts,jsx,tsx}',
    // './components/**/*.{js,ts,jsx,tsx}',
    //* library transpiliation route *//
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    //* if you aren't opt in for src folder structure in your projects, comment the following line & uncomment/add the paths as required *//
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
