module.exports = {
  content: [
    "./1-index.html",       // root HTML file
   "./src/**/*.{js,ts,jsx,tsx}"  // all HTML/JS in src folder
  ],
    safelist: [
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-red-200",
    "bg-red-400",
    "bg-red-300",
    "bg-green-200",
    "bg-yellow-200",
"bg-gray-300",
"bg-gray-500",
  'flex',
    'space-x-5',
    'justify-center',
    'bg-gray-300',
    'text-white',
    'p-4',
    'px-2',
    'text-xl',
    'hover:bg-gray-500',
    'rounded-lg',
    'font-bold'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}