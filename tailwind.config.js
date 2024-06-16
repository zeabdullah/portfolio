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
                marquee: '20s marquee linear infinite',
                blink: '1s blink linear infinite',
                slideDownAndFade:
                    'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                slideLeftAndFade:
                    'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                slideUpAndFade:
                    'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                slideRightAndFade:
                    'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                fadeOutAndZoomOut:
                    'fadeOutAndZoomOut 300ms cubic-bezier(0.16, 1, 0.3, 1)',
            },
            keyframes: {
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: {
                        transform: 'translateX(calc(-100% - var(--gap)))',
                    },
                },
                blink: {
                    'from, to': { opacity: '0%' },
                    '50%': { opacity: '100%' },
                },
                fadeOutAndZoomOut: {
                    from: { opacity: '1', transform: 'scale(1)' },
                    to: { opacity: '0', transform: 'scale(0.9)' },
                },
                slideDownAndFade: {
                    from: { opacity: '0', transform: 'translateY(-2px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                slideLeftAndFade: {
                    from: { opacity: '0', transform: 'translateX(2px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                slideUpAndFade: {
                    from: { opacity: '0', transform: 'translateY(2px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                slideRightAndFade: {
                    from: { opacity: '0', transform: 'translateX(-2px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
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
