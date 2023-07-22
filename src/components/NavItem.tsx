import { m } from 'framer-motion'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { navItemCls } from '@/utils/classnames'
import { cn } from '@/utils/css'
import { tapMotionProps } from '@/utils/css'
import MotionLink from './MotionLink'
import PulseEffect from './PulseEffect'

interface BaseProps {
    pulseEffect?: boolean
    children?: ReactNode
    className?: string
}
type ComponentWithBaseProps<T extends ElementType> = Omit<
    ComponentPropsWithoutRef<T>,
    keyof BaseProps
>

type NavItemProps = (
    | ({ element: 'next-link' } & ComponentWithBaseProps<typeof MotionLink>)
    | ({ element: 'a' } & ComponentWithBaseProps<(typeof m)['a']>)
    | ({ element: 'button' } & ComponentWithBaseProps<(typeof m)['button']>)
) &
    BaseProps

export default function NavItem({
    pulseEffect,
    className,
    children,
    ...props
}: NavItemProps) {
    const content = (
        <>
            {pulseEffect && <PulseEffect />}
            {children}
        </>
    )

    if (props.element === 'next-link') {
        const { element: _e, ...restProps } = props
        return (
            <MotionLink
                className={cn(navItemCls, 'relative', className)}
                scroll={false}
                {...restProps}
                {...tapMotionProps}
            >
                {content}
            </MotionLink>
        )
    }
    if (props.element === 'a') {
        const { element: _e, ...restProps } = props
        return (
            <m.a
                className={cn(navItemCls, 'relative', className)}
                {...restProps}
                {...tapMotionProps}
            >
                {content}
            </m.a>
        )
    }

    const { element: _e, ...restProps } = props
    return (
        <m.button
            className={cn(navItemCls, 'relative', className)}
            {...restProps}
            {...tapMotionProps}
        >
            {content}
        </m.button>
    )
}
