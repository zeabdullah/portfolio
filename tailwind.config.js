/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
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
