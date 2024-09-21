/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#111422",
        varTypeColor: "#1ccdb0",
        varNameColor: "#ff544b",
        operatorColor: "#eacd61",
        objectKeyColor: "#bcc1dc",
        objectTextValueColor: "#21de85",
        objectNumberValueColor: "#e0723f",
      }
    },
  },
  plugins: [],
}