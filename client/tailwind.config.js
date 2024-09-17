const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "0px 7px 29px rgba(100, 100, 111, 0.2)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(250,46,46,1) 0%, rgba(207,94,30,1) 51%, rgba(141,6,6,1) 100%)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
