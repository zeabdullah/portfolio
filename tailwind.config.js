/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')
const twColors = require('tailwindcss/colors')
const { screens, colors, fontFamilies } = require('./src/utils/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', 'contentlayer.config.ts'],
    darkMode: 'class',

    theme: {
        screens,
        extend: {
            colors,
            fontFamily: fontFamilies,
            typography: {
                brand: {
                    css: {
                        '--tw-prose-links': twColors.teal[600],
                        '--tw-prose-invert-links': twColors.teal[500],
                    },
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
