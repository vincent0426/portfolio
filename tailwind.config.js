/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0A1828",
                secondary: "#178582",
                gold: "#BFA181",
            },
            fontFamily: {
                handlee: "Handlee",
                kalam: "Kalam",
            },
            backgroundImage: {
                'hero-pattern': "url('/public/hero.svg')",
            },
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
