/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['JetBrains Mono', 'Monaco', 'monospace'],
            },
            colors: {
                dark: '#111111',
                light: '#EAEAEA',
            },
        },
    },
    plugins: [],
};
