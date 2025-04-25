/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Make sure this covers your files
    ],
    theme: {
      extend: {
        // Add custom colors if needed, but default blue/gray should work well
        colors: {
          // Example: add a specific blue if needed
          // chatBlue: '#3B82F6',
        }
      },
    },
    plugins: [],
  }