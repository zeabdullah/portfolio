import type { Variant, Transition } from 'framer-motion'
import { useMemo } from 'react'
import { focusRingCls } from '@/utils/classnames'
import { cn } from '../css'

interface ButtonStyleOptions {
    attractive?: boolean
}

export function useButtonStyles({ attractive }: ButtonStyleOptions) {
    return useMemo(
        () => ({
            className: cn(
                'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-semibold transition-[color,background-color,box-shadow] focus-visible:outline-none',
                focusRingCls,
                attractive
                    ? 'bg-brand-600 text-light'
                    : 'border-[1.5px] border-neutral-300 bg-neutral-100 hocus-visible:bg-neutral-200 dark:border-neutral-400 dark:bg-neutral-800 dark:text-light dark:hocus-visible:bg-neutral-700',
            ),

            defaultVariant: {} satisfies Variant,

            focusVariant: {
                scale: 1.025,
                filter: attractive ? 'brightness(1.1)' : '',
            } satisfies Variant,

            tapVariant: {
                scale: 0.975,
                filter: attractive ? 'brightness(0.9)' : '',
            } satisfies Variant,

            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 12,
                mass: 0.3,
            } satisfies Transition,
        }),
        [attractive],
    )
}
