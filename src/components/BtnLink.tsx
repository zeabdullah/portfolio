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
            ? 'border-none bg-brand-600 text-light'
            : 'border-[1.5px] border-neutral-300 bg-neutral-100 hocus-visible:bg-neutral-200 dark:bg-dark dark:text-light dark:hocus-visible:bg-neutral-800',
    )

    return (
        <m.a
            className={cn(linkBtnCls, className)}
            whileFocus={{
                scale: 1.035,
                filter: attractive ? 'brightness(1.15)' : '',
            }}
            whileHover={{
                scale: 1.035,
                filter: attractive ? 'brightness(1.15)' : '',
            }}
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
