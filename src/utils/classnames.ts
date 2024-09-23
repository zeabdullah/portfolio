import clsx from 'clsx'
import { cn } from './css'

export const containerCls = clsx('mx-auto max-w-4xl px-4 lg:px-0')

export const btnColorsCls = clsx(
    'text-neutral-600 hover:duration-75 hocus-visible:bg-neutral-300 hocus-visible:text-dark dark:text-neutral-400 dark:hocus-visible:bg-opacity-25 dark:hocus-visible:text-light',
)

export const focusRingCls = clsx(
    'outline-none ring-0 ring-accent-400 focus-visible:ring',
)

export const navItemCls = cn(
    btnColorsCls,
    focusRingCls,
    'shrink rounded-md px-5 py-2 font-medium transition-[color,background-color,box-shadow]',
)

export const navBtnCls = cn(
    navItemCls,
    focusRingCls,
    'p-2 transition-[color,background-color,box-shadow]',
)
