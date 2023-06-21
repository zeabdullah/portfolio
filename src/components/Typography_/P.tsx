import { m } from 'framer-motion'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/css'

export default function P({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<(typeof m)['p']>): JSX.Element {
    return (
        <m.p
            className={cn(
                'text-black dark:font-light dark:text-light sm:text-base/relaxed md:text-lg/relaxed',
                className,
            )}
            {...props}
        >
            {children}
        </m.p>
    )
}
