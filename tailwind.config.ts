import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["bg-green-1", "text-green-1"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Poppins"', "sans-serif"],
        // body: ['"Plus Jakarta Sans"', "sans-serif"],
        headline: ['"Poppins"', "sans-serif"],
        // headline: ['"Plus Jakarta Sans"', "sans-serif"],
        code: ['"Source Code Pro"', "monospace"],
        poppins: ['"Poppins"', "sans-serif"],
        reenie: ['"Reenie Beanie"', "cursive"],
      },
      fontSize: {
        // heading
        "heading-h1": [
          "var(--text-2xl)",
          { lineHeight: "3rem", fontWeight: "700" },
        ],
        "heading-h2": [
          "var(--text-xl)",
          { lineHeight: "2.375rem", fontWeight: "700" },
        ],
        "heading-h3": [
          "var(--text-lg)",
          { lineHeight: "1.875rem", fontWeight: "700" },
        ],
        "heading-h4": [
          "var(--text-md)",
          { lineHeight: "1.625rem", fontWeight: "700" },
        ],
        "heading-h5": [
          "var(--text-base)",
          { lineHeight: "1.5rem", fontWeight: "700" },
        ],
        // title
        "title-1": [
          "var(--text-md)",
          { lineHeight: "1.625rem", fontWeight: "600" },
        ],
        "title-2": [
          "var(--text-base)",
          { lineHeight: "1.5rem", fontWeight: "600" },
        ],
        "title-3": [
          "var(--text-sm)",
          { lineHeight: "1.375rem", fontWeight: "600" },
        ],
        "title-4": [
          "var(--text-xs)",
          { lineHeight: "1.25rem", fontWeight: "600" },
        ],
        "title-5": [
          "var(--text-2xs)",
          { lineHeight: "1.125rem", fontWeight: "600" },
        ],
        // medium
        "medium-1": [
          "var(--text-md)",
          { lineHeight: "1.625rem", fontWeight: "500" },
        ],
        "medium-2": [
          "var(--text-base)",
          { lineHeight: "1.5rem", fontWeight: "500" },
        ],
        "medium-3": [
          "var(--text-sm)",
          { lineHeight: "1.375rem", fontWeight: "500" },
        ],
        "medium-4": [
          "var(--text-xs)",
          { lineHeight: "1.25rem", fontWeight: "500" },
        ],
        "medium-5": [
          "var(--text-2xs)",
          { lineHeight: "1.125rem", fontWeight: "500" },
        ],
        "body-1": [
          "var(--text-sm)",
          { lineHeight: "1.125rem", fontWeight: "400" },
        ],
        "body-2": [
          "var(--text-xs)",
          { lineHeight: "1.125rem", fontWeight: "400" },
        ],
        "body-3": [
          "var(--text-2xs)",
          { lineHeight: "1.125rem", fontWeight: "400" },
        ],
      },
      colors: {
        background: "hsl(var(--background))",
        page: "hsl(var(--page))",
        foreground: "hsl(var(--foreground))",
        code: "hsl(var(--code))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring), 0.25)",
        gray: "hsl(var(--gray))",
        "icon-gray": "hsl(var(--icon-gray))",
        blue: {
          "1": "hsl(var(--blue-1))",
          "2": "hsl(var(--blue-2))",
          soft: "hsl(var(--blue-soft))",
        },
        orange: {
          DEFAULT: "hsl(var(--orange))",
          soft: "hsl(var(--orange-soft))",
        },
        green: {
          "1": "hsl(var(--green-1))",
          "2": "hsl(var(--green-2))",
          "3": "hsl(var(--green-3))",
        },
        kreafi: {
          "1": "hsl(var(--kreafi-1))",
          "2": "hsl(var(--kreafi-2))",
          "3": "hsl(var(--kreafi-3))",
        },
        red: {
          "1": "hsl(var(--red-1))",
          "2": "hsl(var(--red-2))",
          "3": "hsl(var(--red-3))",
        },
        yellow: {
          "1": "hsl(var(--yellow-1))",
          "2": "hsl(var(--yellow-2))",
          "3": "hsl(var(--yellow-3))",
        },
        purple: {
          "1": "hsl(var(--purple-1))",
          "2": "hsl(var(--purple-2))",
          "3": "hsl(var(--purple-3))",
        },
        button: {
          normal: "hsl(var(--button-normal))",
          "normal-soft": "hsl(var(--button-normal-soft))",
          hover: "hsl(var(--button-hover))",
          "hover-soft": "hsl(var(--hover-soft))",
          "hover-line": "hsl(var(--hover-line))",
        },
        line: "hsl(var(--line))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        font: {
          "1": "hsl(var(--font-1))",
          "2": "hsl(var(--font-2))",
          "3": "hsl(var(--font-3))",
          "4": "hsl(var(--font-4))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--green-1))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      boxShadow: {
        "outline-green": "0 0 0 3px hsl(var(--green-1) / 0.15)",
        blur: "0 4 7 0px hsl(217, 11%, 60%, 0.07)",
        // custom: "0 4px 7px 0px rgba(0, 0, 0, 0.07)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 15s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
