'use client'

import { LazyMotion, domAnimation } from 'framer-motion'
import { ThemeProvider } from 'next-themes'

export default function Providers({
    children,
}: {
    children?: React.ReactNode
}) {
    return (
        <LazyMotion features={domAnimation} strict>
            <ThemeProvider
                attribute='class'
                defaultTheme='dark'
                enableSystem={false}
            >
                {children}
            </ThemeProvider>
        </LazyMotion>
    )
}
