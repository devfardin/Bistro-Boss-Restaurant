/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primery": '#D1A054',
        "black1": '#151515',
        "text": '#737373',
        "sectionbg": '#F6F6F6'
      },
      backgroundImage:{
        'homeabout': 'url("./src/assets/images/chef-service.jpg")',
        'loginbg': 'url("https://i.ibb.co/Y0TbtZg/authentication.png")',
      }
    },
  },
  plugins: [require("daisyui")],
}

