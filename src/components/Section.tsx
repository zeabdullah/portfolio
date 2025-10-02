import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/css'

export default function Section({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'section'>) {
    return (
        <section className={cn('py-16 md:py-24', className)} {...props}>
            {children}
        </section>
    )
}
