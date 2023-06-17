import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/dom'

interface BtnLinkProps extends ComponentPropsWithoutRef<'a'> {
    attractive?: boolean
}
export default function BtnLink({
    attractive,
    children,
    className,
    ...props
}: BtnLinkProps) {
    const linkBtnCls = cn(
        'flex items-center justify-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 font-bold transition duration-150 hover:border-neutral-400 active:scale-[0.975] active:duration-[50ms] dark:border-opacity-50',
        attractive
            ? 'bg-dark text-light hover:bg-neutral-100 hover:text-dark focus:bg-neutral-100 focus:text-dark dark:bg-neutral-100 dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:focus:bg-dark dark:focus:text-light'
            : 'bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-dark dark:text-light dark:hover:bg-neutral-800 dark:focus:bg-neutral-800',
    )

    return (
        <a className={cn(linkBtnCls, className)} {...props}>
            {children}
        </a>
    )
}
