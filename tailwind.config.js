/* eslint-disable @typescript-eslint/no-var-requires */
const twColors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const { screens, colors, fontFamilies } = require('./src/utils/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,md,mdx}'],
    darkMode: 'class',

    theme: {
        screens,
        extend: {
            colors,
            fontFamily: fontFamilies,
            typography: {
                brand: {
                    css: {
                        '--tw-prose-links': twColors.teal[700],
                        '--tw-prose-invert-links': twColors.teal[400],
                    },
                },
            },
            animation: {
                blink: '1s blink linear infinite',
            },
            keyframes: {
                blink: {
                    'from, to': { opacity: '0%' },
                    '50%': { opacity: '100%' },
                },
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
        plugin(function ({ addVariant }) {
            addVariant('hocus', ['&:hover', '&:focus'])
            addVariant('hocus-within', ['&:hover', '&:focus-within'])
            addVariant('hocus-visible', ['&:hover', '&:focus-visible'])
        }),
    ],
}
