/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            screens: {
                sm: '700px',
            },
            fontFamily: {
                mono: [
                    'var(--font-monospace)',
                    'Lucida Console',
                    'Monaco',
                    'monospace',
                ],
            },
            colors: {
                dark: 'hsl(0, 0%, 6%)',
                light: 'hsl(0, 0%, 100%)',
            },
        },
    },
    plugins: [],
}
