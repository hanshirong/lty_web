/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./public/**/*.html",
    ],
    theme: {
        extend: {
            width: {
                "1200px": "1200px"
            },
            height: {
                "600px": "600px"
            },
            keyframes: {
                fp: {
                    "0%": {bottom: "-33%", opacity: "0"},
                    "100%": {bottom: "0", opacity: "1"},
                },
            },
            animation: {
                fp: "fp 1 ease-in-out",
            },
        },
        borderRadius: {
            "large": "4rem",
        },
    },
    plugins: [
        require("daisyui"),
    ],
    daisyui: {
        styled: true,
        base: true,
        utils: true,
        logs: true,
        darkTheme: "night",
        themes: ["winter", "night"],
    },
}
