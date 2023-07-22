import { LazyMotion, domAnimation } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import NextNProgress from 'nextjs-progressbar'
import CustomHead from '@/components/CustomHead'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import '@/styles/globals.css'
import { cn } from '@/utils/css'
import { colors } from '@/utils/tailwind'

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    adjustFontFallback: true,
    display: 'swap',
    preload: true,
    weight: 'variable',
    variable: '--font-monospace',
})
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    adjustFontFallback: true,
    display: 'swap',
    preload: true,
    weight: 'variable',
    variable: '--font-grotesk',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <CustomHead />

            <LazyMotion features={domAnimation} strict>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem={false}
                >
                    <NextNProgress
                        color={colors.brand['500']}
                        height={2}
                        options={{ showSpinner: false, speed: 300 }}
                    />
                    <div
                        className={cn(
                            jetBrainsMono.variable,
                            spaceGrotesk.variable,
                            'flex min-h-screen flex-col bg-light font-sans text-dark antialiased transition-colors duration-300 selection:bg-brand-500 selection:text-dark dark:bg-dark dark:text-light',
                        )}
                    >
                        <Navbar />
                        <main className='flex-1'>
                            <Component {...pageProps} />
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </LazyMotion>
        </>
    )
}
