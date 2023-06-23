import { fontFamily } from 'tailwindcss/defaultTheme'

export const screens = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
} as const

export const colors = {
    dark: 'hsl(0, 0%, 6%)',
    light: 'hsl(0, 0%, 100%)',
    // brand: '#??????', // ? looking for inspiration
} as const

export const fontFamilies = {
    mono: ['var(--font-monospace)', 'Lucida Console', 'Monaco', 'monospace'],
    sans: ['var(--font-grotesk)', ...fontFamily.sans],
} as const

export type Color = keyof typeof colors
export type Screen = keyof typeof screens
export type FontFamily = keyof typeof fontFamilies
