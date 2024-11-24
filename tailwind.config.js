/** @type {import('tailwindcss').Config} */

const { transform } = require('next/dist/build/swc');

module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        "loop-scroll": "loop-scroll 250s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from:{transform: "translateX(0px)"},
          to: {transform: "translateX(-100%)"},
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
