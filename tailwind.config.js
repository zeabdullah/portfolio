/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')
const { screens, colors, fontFamilies } = require('./src/utils/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        screens,
        extend: {
            colors,
            fontFamily: fontFamilies,
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
