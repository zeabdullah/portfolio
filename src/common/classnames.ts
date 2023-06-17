import { cn } from '@/utils/dom'

export const btnColorsCls = cn(
    'text-neutral-600 transition-colors hover:bg-neutral-300 hover:text-dark hover:duration-75 focus:bg-neutral-300 dark:text-neutral-400 dark:hover:bg-opacity-25 dark:hover:text-light dark:focus:bg-opacity-25 dark:focus:text-light',
)

export const navItemCls = cn(btnColorsCls, 'flex-shrink rounded-md px-5 py-2')

export const navBtnCls = cn(navItemCls, 'p-2')

export const navAndFooterClassName = cn(
    'border-neutral-200 px-3.5 py-4 transition-[background-color] duration-300 dark:border-opacity-10',
)
