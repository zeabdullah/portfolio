/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontWeight: {
            light: '300',
            regular: '400',
            bold: '500',
        },
        extend: {},
    },
    plugins: [],
};
