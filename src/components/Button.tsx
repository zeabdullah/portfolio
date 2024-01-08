import { m, motion } from 'framer-motion'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/css'
import { useButtonStyles } from '@/utils/hooks/use-button-styles'

export interface ButtonProps
    extends ComponentPropsWithoutRef<(typeof m)['button']> {
    attractive?: boolean
    lazyMotion?: boolean
}

export default function Button({
    children,
    className,
    attractive,
    lazyMotion = true,
    ...props
}: ButtonProps) {
    const {
        className: btnCls,
        tapVariant,
        focusVariant,
    } = useButtonStyles({ attractive })

    const ButtonComponent = lazyMotion ? m.button : motion.button

    return (
        <ButtonComponent
            {...props}
            className={cn(btnCls, className)}
            whileFocus={focusVariant}
            whileHover={focusVariant}
            whileTap={tapVariant}
            transition={{
                type: 'spring',
                stiffness: 400,
                damping: 12,
                mass: 0.3,
            }}
        >
            {children}
        </ButtonComponent>
    )
}
