/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                sm: '700px'
            },
            fontFamily: {
                sans: ['JetBrains Mono', 'Lucida Console', 'Monaco', 'monospace'],
            },
            colors: {
                dark: 'hsl(0, 0%, 6%)',
                light: 'hsl(0, 0%, 100%)',
            },
        },
    },
    plugins: [],
};
