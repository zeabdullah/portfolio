import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'

export const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    adjustFontFallback: true,
    display: 'swap',
    preload: true,
    weight: 'variable',
    variable: '--font-monospace',
})
export const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    adjustFontFallback: true,
    display: 'swap',
    preload: true,
    weight: 'variable',
    variable: '--font-sans',
})
