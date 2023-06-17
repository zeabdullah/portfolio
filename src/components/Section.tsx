import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/dom'

export default function Section({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'section'>): JSX.Element {
    return (
        <section className={cn('py-12 md:py-16', className)} {...props}>
            {children}
        </section>
    )
}
