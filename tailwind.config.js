module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/images/car/super-car.png')",
        'login-style': "url('/src/images/car/car4.jpg')",
      }
    },
  },
  plugins: [],
}