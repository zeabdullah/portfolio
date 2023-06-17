/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: 'hsl(0, 0%, 6%)',
                light: 'hsl(0, 0%, 100%)',
                // brand: '#??????', // ? looking for inspiration
            },
            fontFamily: {
                mono: [
                    'var(--font-monospace)',
                    'Lucida Console',
                    'Monaco',
                    'monospace',
                ],
            },
        },
    },
    plugins: [],
}
