import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        palace: {
          orange: "#F9A852",
          "orange-light": "#FBC98A",
          pink: "#E94E9F",
          "pink-light": "#F07BB8",
          blue: "#4FC3F7",
          "blue-light": "#8DD9FA",
          green: "#C5E17A",
          "green-light": "#D9EEA8",
          charcoal: "#1A1A1B",
          cream: "#FAFAF8",
          warm: "#F5F3EF",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(26, 26, 27, 0.08)",
        "soft-lg": "0 12px 40px -8px rgba(26, 26, 27, 0.12)",
        glow: "0 0 40px -10px rgba(249, 168, 82, 0.3)",
      },
      backgroundImage: {
        "gradient-orange": "linear-gradient(135deg, #FBC98A 0%, #F9A852 100%)",
        "gradient-pink": "linear-gradient(135deg, #F07BB8 0%, #E94E9F 100%)",
        "gradient-blue": "linear-gradient(135deg, #8DD9FA 0%, #4FC3F7 100%)",
        "gradient-green": "linear-gradient(135deg, #D9EEA8 0%, #C5E17A 100%)",
        "gradient-hero":
          "linear-gradient(135deg, rgba(26,26,27,0.75) 0%, rgba(26,26,27,0.45) 50%, rgba(26,26,27,0.65) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(-3deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float-delayed 7s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
