import React from 'react'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/css'

export default function H1({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'h1'>) {
    return (
        <h1
            className={cn(
                'font-mono text-3xl sm:text-4xl md:text-5xl',
                className,
            )}
            {...props}
        >
            {children}
        </h1>
    )
}
