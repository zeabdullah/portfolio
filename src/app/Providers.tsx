'use client'

import { LazyMotion, domAnimation } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import { Suspense } from 'react'
import { NextProgressBar } from '@/components/ProgressBar'
import { TooltipProvider } from '@/components/Tooltip'
import { colors } from '@/utils/tailwind'

export default function Providers({
    children,
}: {
    children?: React.ReactNode
}) {
    return (
        <LazyMotion features={domAnimation} strict>
            <TooltipProvider>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem={false}
                >
                    {children}
                    <Suspense fallback={null}>
                        <NextProgressBar
                            color={colors.brand['500']}
                            options={{ showSpinner: false, speed: 300 }}
                        />
                    </Suspense>
                </ThemeProvider>
            </TooltipProvider>
        </LazyMotion>
    )
}
