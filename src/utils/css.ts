import clsx, { type ClassValue } from 'clsx'
import type { Variants } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(...inputs))

export const fadeVariants: Variants = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
}

export const cardVariants: Variants = {
    hide: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1 },
}
export const tapMotionProps = {
    whileTap: { scale: 0.975 },
    transition: {
        type: 'spring',
        stiffness: 400,
        damping: 12,
        mass: 0.3,
    },
}
