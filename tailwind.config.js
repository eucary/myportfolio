/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotate(-6deg)' },
            '50%': { transform: 'rotate(6deg)' },
          },
        },
        animation: {
          'wiggle-more': 'wiggle 0.3s ease-in-out',
        },
        fontFamily: {
        rubikBubbles: ['"Rubik Bubbles"', 'cursive'],

        },
      },
    }
,
  plugins: [
  ],
}