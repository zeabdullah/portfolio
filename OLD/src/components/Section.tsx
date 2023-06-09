import { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

export default function Section({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'section'>): JSX.Element {
    return (
        <section className={clsx('py-12 md:py-16', className)} {...props}>
            {children}
        </section>
    )
}
