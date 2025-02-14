import type { Config } from "tailwindcss";

export default {
  content: [
    "./actions/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./actions/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./actions/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
