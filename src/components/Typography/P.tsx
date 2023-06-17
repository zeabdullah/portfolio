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
                'text-black dark:font-light dark:text-light sm:text-base/relaxed md:text-lg/relaxed',
                className,
            )}
            {...props}
        >
            {children}
        </p>
    )
}
