import type { AppProps } from 'next/app'
import { JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { cn } from '@/utils/dom'

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    adjustFontFallback: true,
    display: 'swap',
    preload: true,
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-monospace',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={cn(jetBrainsMono.variable, 'font-mono')}>
            <Component {...pageProps} />
        </main>
    )
}
