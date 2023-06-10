import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

export default function H2({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'h2'>): JSX.Element {
    return (
        <h2
            className={clsx('text-xl font-bold sm:text-2xl', 'mb-2', className)}
            {...props}
        >
            {children}
        </h2>
    )
}
