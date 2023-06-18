/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')
const { screens } = require('./src/utils/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        screens,
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
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('hocus', ['&:hover', '&:focus'])
            addVariant('hocus-within', ['&:hover', '&:focus-within'])
            addVariant('hocus-visible', ['&:hover', '&:focus-visible'])
        }),
    ],
}
