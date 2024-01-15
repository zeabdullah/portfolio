import type { Metadata } from 'next/types'
import DEFAULT_SEO from 'seo.config'
import CustomHead from '@/components/CustomHead'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import { jetBrainsMono, spaceGrotesk } from '@/styles/fonts'
import '@/styles/globals.css'
import { cn } from '@/utils/css'
import Providers from './Providers'

export const metadata: Metadata = DEFAULT_SEO

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang='en'
            className='scroll-pt-24 scroll-smooth'
            suppressHydrationWarning
        >
            <CustomHead />

            <body>
                <Providers>
                    <div
                        className={cn(
                            jetBrainsMono.variable,
                            spaceGrotesk.variable,
                            'flex min-h-screen flex-col bg-light font-sans text-dark antialiased transition-colors duration-300 selection:bg-accent-400 selection:text-dark dark:bg-dark dark:text-light',
                        )}
                    >
                        <Navbar />
                        <main className='flex-1'>{children}</main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    )
}
