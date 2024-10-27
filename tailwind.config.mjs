/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'inacap-red': '#E31837',
        'dark': '#1A1A1A',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'permanent-marker': ['Permanent Marker', 'cursive'],
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
}