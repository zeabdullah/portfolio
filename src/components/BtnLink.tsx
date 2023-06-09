import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

interface BtnLinkProps extends ComponentPropsWithoutRef<'a'> {
    attractive?: boolean
}
export default function BtnLink({
    attractive,
    children,
    className,
    ...props
}: BtnLinkProps) {
    const linkBtnCls = clsx(
        'flex justify-center items-center gap-2',
        'font-bold',
        attractive
            ? 'bg-dark text-light dark:bg-neutral-100 dark:text-dark ' +
                  'hover:bg-neutral-100 hover:text-dark focus:bg-neutral-100 focus:text-dark ' +
                  'dark:hover:bg-dark dark:hover:text-light dark:focus:bg-dark dark:focus:text-light'
            : 'bg-neutral-100 dark:bg-dark dark:text-light ' +
                  'hover:bg-neutral-200 focus:bg-neutral-200 ' +
                  'dark:hover:bg-neutral-800 dark:focus:bg-neutral-800',

        'border border-neutral-300 hover:border-neutral-400 dark:border-opacity-50',
        'rounded-lg py-2 px-4',
        'transition-colors',
    )

    return (
        <a className={clsx(linkBtnCls, className)} {...props}>
            {children}
        </a>
    )
}
