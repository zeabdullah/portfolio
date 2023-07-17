import { cn } from '@/utils/css'

export const btnColorsCls = cn(
    'text-neutral-600 transition-colors hover:bg-neutral-300 hover:text-dark hover:duration-75 focus-visible:bg-neutral-300 dark:text-neutral-400 dark:hover:bg-opacity-25 dark:hover:text-light dark:focus-visible:bg-opacity-25 dark:focus-visible:text-light',
)

export const navAndFooterClassName = cn(
    'border-neutral-200 px-3.5 py-4 transition-[background-color] duration-300 dark:border-opacity-10',
)

export const focusRingCls = cn(
    'outline-none ring-0 ring-purple-400 transition-shadow focus-visible:ring',
)

export const navItemCls = cn(
    btnColorsCls,
    focusRingCls,
    'shrink rounded-md px-5 py-2',
)

export const navBtnCls = cn(navItemCls, focusRingCls, 'p-2')
