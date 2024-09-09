/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'red-glow': '0 0 10px rgba(239, 68, 68, 0.5)',    // Red shadow
        'blue-glow': '0 0 10px rgba(59, 130, 246, 0.5)',   // Blue shadow
        'green-glow': '0 0 10px rgba(34, 197, 94, 0.5)',    // Green shadow
      },
    },
  },
  plugins: [],
}
