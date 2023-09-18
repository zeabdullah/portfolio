import { m } from 'framer-motion'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/css'
import { useButtonStyles } from '@/utils/hooks/use-button-styles'

export interface ButtonProps
    extends ComponentPropsWithoutRef<(typeof m)['button']> {
    attractive?: boolean
}

export default function Button({
    children,
    className,
    attractive,
    ...props
}: ButtonProps) {
    const {
        className: btnCls,
        tapVariant,
        focusVariant,
    } = useButtonStyles({ attractive })

    return (
        <m.button
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
        </m.button>
    )
}
