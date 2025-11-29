const sharedConfig = require('config/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    ...sharedConfig,
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "../../packages/ui/**/*.{js,ts,jsx,tsx}"
    ],
}
