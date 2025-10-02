import type { MotionProps } from 'framer-motion'

export const tapMotionProps: Partial<MotionProps> = {
    whileTap: { scale: 0.975 },
    transition: {
        type: 'spring',
        stiffness: 400,
        damping: 12,
        mass: 0.3,
    },
}
