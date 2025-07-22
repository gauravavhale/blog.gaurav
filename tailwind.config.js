/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables 'dark:' utility variants
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}",     // For Pages Router (if used)
    "./components/**/*.{js,ts,jsx,tsx}" // For your component files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
