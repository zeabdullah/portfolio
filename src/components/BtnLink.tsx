import { m } from 'framer-motion'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/css'

interface BtnLinkProps extends ComponentPropsWithoutRef<(typeof m)['a']> {
    attractive?: boolean
    external?: boolean
}
export default function BtnLink({
    attractive,
    children,
    className,
    external,
    ...props
}: BtnLinkProps) {
    const linkBtnCls = cn(
        'flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-semibold transition-colors duration-150',
        attractive
            ? 'border-none bg-dark text-light focus-visible:bg-neutral-100 focus-visible:text-dark dark:bg-neutral-100 dark:text-dark dark:focus-visible:bg-dark dark:focus-visible:text-light'
            : 'border-[1.5px] border-neutral-300 bg-neutral-100 hover:bg-neutral-200 focus-visible:bg-neutral-200 dark:bg-dark dark:text-light dark:hover:bg-neutral-800 dark:focus-visible:bg-neutral-800',
    )

    return (
        <m.a
            className={cn(linkBtnCls, className)}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.95 }}
            transition={{
                type: 'spring',
                stiffness: 400,
                damping: 12,
                mass: 0.3,
            }}
            {...props}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer noopener' : undefined}
        >
            {children}
        </m.a>
    )
}
