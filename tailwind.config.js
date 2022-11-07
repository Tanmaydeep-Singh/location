/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '1rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      height: {
        '547.2':'60vh',
        '80vh':'90vh',
      },
      
      colors: {
        parkit: {
          100: "#404258",
          200: "#6C4AB6",
        },
      },
    },
  },
  plugins: [],
};
