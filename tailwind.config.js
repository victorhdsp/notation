/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{tsx,mdx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

