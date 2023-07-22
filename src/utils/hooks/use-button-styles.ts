import type { Variant, Transition } from 'framer-motion'
import { useMemo } from 'react'
import { focusRingCls } from '@/common/classnames'
import { cn } from '../css'

interface ButtonStyleOptions {
    attractive?: boolean
}

export function useButtonStyles({ attractive }: ButtonStyleOptions) {
    const styles = useMemo(
        () => ({
            className: cn(
                'flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-semibold transition-[color,background-color,box-shadow] focus-visible:outline-none',
                focusRingCls,
                attractive
                    ? 'border-none bg-brand-500 text-light'
                    : 'border-[1.5px] border-neutral-300 bg-neutral-100 hocus-visible:bg-neutral-200 dark:bg-dark dark:text-light dark:hocus-visible:bg-neutral-800',
            ),

            focusVariant: {
                scale: 1.035,
                filter: attractive ? 'brightness(1.15)' : '',
            } satisfies Variant,

            tapVariant: {
                scale: 0.95,
                filter: attractive ? 'brightness(0.95)' : '',
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
    return styles
}
