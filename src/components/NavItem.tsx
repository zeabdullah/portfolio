import { m } from 'framer-motion'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { navItemCls } from '@/common/classnames'
import { cn } from '@/utils/dom'
import { tapMotionProps } from '@/utils/motion'
import MotionLink from './MotionLink'
import PulsatingCircle from './PulsatingCircle'

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
}: NavItemProps): JSX.Element {
    if (props.element === 'next-link') {
        return (
            <MotionLink
                className={cn(navItemCls, 'relative', className)}
                scroll={false}
                {...props}
                {...tapMotionProps}
            >
                {pulseEffect && <PulsatingCircle />}
                {children}
            </MotionLink>
        )
    }
    if (props.element === 'a') {
        return (
            <m.a
                className={cn(navItemCls, 'relative', className)}
                {...props}
                {...tapMotionProps}
            >
                {pulseEffect && <PulsatingCircle />}
                {children}
            </m.a>
        )
    }

    return (
        <m.button
            className={cn(navItemCls, 'relative', className)}
            {...props}
            {...tapMotionProps}
        >
            {pulseEffect && <PulsatingCircle />}
            {children}
        </m.button>
    )
}
