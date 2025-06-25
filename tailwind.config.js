/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        "accent-primary": "var(--color-accent-primary)",
        "accent-secondary": "var(--color-accent-secondary)",
        alert: "var(--color-alert)",
        warning: "var(--color-warning)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
      },
      fontFamily: {
        "space-mono": ["'Space Mono'", "monospace"],
        "inter": ["'Inter'", "sans-serif"],
        "fira-code": ["'Fira Code'", "monospace"],
      },
      animation: {
        typing: "typing 3.5s steps(40, end), blink 1s step-end infinite",
      },
      keyframes: {
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" }
        },
        blink: {
          "50%": { borderColor: "transparent" }
        }
      },
      boxShadow: {
        'glow': '0 0 10px rgba(0, 255, 65, 0.3)',
      },
    },
  },
  plugins: [],
}
