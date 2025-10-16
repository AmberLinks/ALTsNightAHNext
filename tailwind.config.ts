import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          DEFAULT: '#D3A257',
          dark: '#c08c3c',
        },
        iron: {
          DEFAULT: '#36454F',
        },
      },
    },
  },
  plugins: [],
};
export default config;
