/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
  },
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',  // Indigo
        secondary: '#7C3AED', // Violet
        light: '#A5B4FC',    // Light indigo
        dark: '#1E1B4B',     // Dark indigo
        text: '#374151',     // Gray-700
        lightText: '#6B7280' // Gray-500
      },
    },
  },
  plugins: [],
}