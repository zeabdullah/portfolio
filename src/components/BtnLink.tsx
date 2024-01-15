'use client'

import { m } from 'framer-motion'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/css'
import { useButtonStyles } from '@/utils/hooks/use-button-styles'

interface BtnLinkProps extends ComponentPropsWithoutRef<(typeof m)['a']> {
    attractive?: boolean
    external?: boolean
}

export default function BtnLink({
    attractive,
    children,
    className,
    external,
    ...props
}: BtnLinkProps) {
    const {
        className: btnCls,
        tapVariant,
        focusVariant,
        transition,
    } = useButtonStyles({ attractive })

    return (
        <m.a
            className={cn(btnCls, className)}
            whileFocus={focusVariant}
            whileHover={focusVariant}
            whileTap={tapVariant}
            transition={transition}
            {...props}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer noopener' : undefined}
        >
            {children}
        </m.a>
    )
}
