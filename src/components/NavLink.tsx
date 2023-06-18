import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import { navItemCls } from '@/common/classnames'
import { cn } from '@/utils/dom'
import PulsatingCircle from './PulsatingCircle'

interface NavLinkProps extends ComponentPropsWithoutRef<typeof Link> {
    pulseEffect?: boolean
}

export function NavLink({
    pulseEffect,
    className,
    children,
    ...props
}: NavLinkProps): JSX.Element {
    return (
        <Link
            className={cn(navItemCls, 'relative', className)}
            {...props}
            scroll={false}
        >
            {pulseEffect && <PulsatingCircle />}
            {children}
        </Link>
    )
}
