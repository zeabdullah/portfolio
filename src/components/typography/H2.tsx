import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/css'

export default function H2({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'h2'>) {
    return (
        <h2
            className={cn('mb-2 text-xl font-bold sm:text-2xl', className)}
            {...props}
        >
            {children}
        </h2>
    )
}
