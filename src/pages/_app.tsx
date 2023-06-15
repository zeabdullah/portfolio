import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { JetBrains_Mono } from 'next/font/google'
import CustomHead from '@/components/CustomHead'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import '@/styles/globals.css'
import { cn } from '@/utils/dom'

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    adjustFontFallback: true,
    display: 'swap',
    preload: true,
    weight: 'variable',
    variable: '--font-monospace',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <CustomHead />

            <ThemeProvider attribute='class'>
                <main
                    className={cn(
                        jetBrainsMono.variable,
                        'bg-light font-mono text-dark antialiased transition-colors duration-300 dark:bg-dark dark:text-light',
                    )}
                >
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                </main>
            </ThemeProvider>
        </>
    )
}
