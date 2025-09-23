/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        borderColorChange: {
          '0%':   { 'border-color': '#f87171' },  // red
          '20%':  { 'border-color': '#fbbf24' },  // yellow
          '40%':  { 'border-color': '#34d399' },  // green
          '60%':  { 'border-color': '#60a5fa' },  // blue
          '80%':  { 'border-color': '#a78bfa' },  // purple
          '100%': { 'border-color': '#f87171' },  // back to red
        },
      },
      animation: {
        'border-color-change': 'borderColorChange 5s linear infinite',
      },
    },
  },
  plugins: [],
}
