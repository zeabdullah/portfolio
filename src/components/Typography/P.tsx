import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/dom'

export default function P({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'p'>): JSX.Element {
    return (
        <p
            className={cn(
                'mb-4 !leading-relaxed tracking-wide text-black dark:font-light dark:text-light sm:text-lg',
                className,
            )}
            {...props}
        >
            {children}
        </p>
    )
}
