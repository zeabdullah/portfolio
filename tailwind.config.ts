import twColors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss/types'
import { screens, colors, fontFamilies } from './src/utils/tailwind'

export default {
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
} satisfies Config
