import type { Variants } from 'framer-motion'

export const cardVariants = {
    hide: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1 },
} as const satisfies Variants
