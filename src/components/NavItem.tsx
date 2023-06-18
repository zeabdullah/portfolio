import { m } from 'framer-motion'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { navItemCls } from '@/common/classnames'
import { cn } from '@/utils/dom'
import { tapMotionProps } from '@/utils/motion'
import MotionLink from './MotionLink'
import PulseEffect from './PulseEffect'

interface BaseProps {
    pulseEffect?: boolean
    children?: ReactNode
    className?: string
    element: unknown
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
    const content = (
        <>
            {pulseEffect && <PulseEffect />}
            {children}
        </>
    )

    if (props.element === 'next-link') {
        return (
            <MotionLink
                className={cn(navItemCls, 'relative', className)}
                scroll={false}
                {...props}
                {...tapMotionProps}
            >
                {content}
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
                {content}
            </m.a>
        )
    }

    return (
        <m.button
            className={cn(navItemCls, 'relative', className)}
            {...props}
            {...tapMotionProps}
        >
            {content}
        </m.button>
    )
}
