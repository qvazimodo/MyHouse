/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content:[
      "./resources/**/*.blade.php",
      "./resources/js/components/**/*.jsx",
  ],
  theme: {

    extend: {},
  },
  plugins: [],
    safelist: [
        'bg-slate-800',
        'text-white',
    ],
}
