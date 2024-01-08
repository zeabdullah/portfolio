import { LazyMotion, domAnimation } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import NextNProgress from 'nextjs-progressbar'
import CustomHead from '@/components/CustomHead'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import { jetBrainsMono, spaceGrotesk } from '@/styles/fonts'
import '@/styles/globals.css'
import { cn } from '@/utils/css'
import { colors } from '@/utils/tailwind'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <CustomHead />
            <Script
                async
                src='https://analytics.zabd.dev/script.js'
                data-website-id='a9d78ec7-c5cd-48c3-8b4c-43eb2ce3ad9d'
            />

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
                            'flex min-h-screen flex-col bg-light font-sans text-dark antialiased transition-colors duration-300 selection:bg-accent-400 selection:text-dark dark:bg-dark dark:text-light',
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
