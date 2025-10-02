'use client'

import { m } from 'framer-motion'
import Link from 'next/link'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import React from 'react'
import { navItemCls } from '@/utils/classnames'
import { cn } from '@/utils/css'
import { tapMotionProps } from '@/utils/motion/props'

const MotionLink = m(Link)

export interface NavItemBaseProps {
    pulseEffect?: boolean
    children?: ReactNode
    className?: string
}

type ComponentWithBaseProps<T extends ElementType> = Omit<
    ComponentPropsWithoutRef<T>,
    keyof NavItemBaseProps
>

export type NavItemProps = (
    | ({ element: 'next-link' } & ComponentWithBaseProps<typeof MotionLink>)
    | ({ element: 'a' } & ComponentWithBaseProps<(typeof m)['a']>)
    | ({ element: 'button' } & ComponentWithBaseProps<(typeof m)['button']>)
) &
    NavItemBaseProps

const NavItem = React.forwardRef<HTMLElement, NavItemProps>(
    ({ pulseEffect, className, children, ...props }, ref) => {
        const content = (
            <>
                {pulseEffect && (
                    <span className='absolute -start-0.5 -top-0.5 aspect-square h-2.5 rounded-full bg-brand-500 dark:bg-brand-400 sm:-end-0.5 sm:start-auto'>
                        <span className='absolute h-full w-full animate-ping rounded-full bg-inherit opacity-80' />
                    </span>
                )}
                {children}
            </>
        )

        if (props.element === 'next-link') {
            const { element: _e, ...restProps } = props
            return (
                <MotionLink
                    ref={ref}
                    className={cn(navItemCls, 'relative', className)}
                    scroll={false}
                    {...restProps}
                    {...(tapMotionProps as any)}
                >
                    {content}
                </MotionLink>
            )
        }

        if (props.element === 'a') {
            const { element: _e, ...restProps } = props
            return (
                <m.a
                    ref={ref as React.ForwardedRef<HTMLAnchorElement>}
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
                ref={ref as React.ForwardedRef<HTMLButtonElement>}
                className={cn(navItemCls, 'relative', className)}
                {...restProps}
                {...tapMotionProps}
            >
                {content}
            </m.button>
        )
    },
)
NavItem.displayName = 'NavItem'

export default NavItem
