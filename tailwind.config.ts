import { Config } from 'tailwindcss'
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-1": "#F5F5F5",
        "gray-2": "#E0E0DF",
        "gray-3": "#929292",
        "gray-4": "#616161",
        "gray-5": "#575757",
        "gray-6": "#1C1C1C",
      },
    },

  },
  plugins: [],
};
export default config;
