import type { Transition } from 'framer-motion'

export const baseBounceTransition = {
    scale: {
        type: 'spring',
        stiffness: 400,
        damping: 14,
        mass: 0.5,
    },
    type: 'spring',
    stiffness: 200,
    damping: 18,
    mass: 1,
} as const satisfies Transition
