// import { LazyMotion, domAnimation } from 'framer-motion'
// import { ThemeProvider } from 'next-themes'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import { jetBrainsMono, spaceGrotesk } from '@/styles/fonts'
import '@/styles/globals.css'
import { cn } from '@/utils/css'
import Providers from './Providers'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en' className='scroll-pt-24 scroll-smooth'>
            <head>
                <meta charSet='UTF-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta
                    name='description'
                    content='A dev with the passion to make the web a greater place.'
                />
                <title>Abdullah Zeidan | Web Engineer</title>
            </head>

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

// TODO: Implement app layout + blog/[slug] page in app router
