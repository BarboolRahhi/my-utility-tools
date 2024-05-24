/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
