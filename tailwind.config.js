/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "font-family": `Chalkboard,comic sans ms,"sans-serif"`,
          "--rounded-badge": ".4rem",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "font-family": `Chalkboard,comic sans ms,"sans-serif"`,
          "--rounded-badge": ".4rem",
        },
      },
    ],
  },
};
