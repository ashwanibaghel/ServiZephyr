// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // If you install flowbite and want to use it, keep these:
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0a192f',
        'slate-light': '#a8b2d1',
        'slate-lightest': '#ccd6f6',
      },
      boxShadow: {
        'glow-green': '0 6px 30px -12px rgba(16,185,129,0.45)'
      }
    },
  },
  plugins: [
    // require('flowbite/plugin') // uncomment if you installed flowbite plugin
  ],
};
