import type { ComponentPropsWithoutRef } from 'react'
import { navItemCls } from '@/common/classnames'
import { cn } from '@/utils/dom'

export function NavLink({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'a'>): JSX.Element {
    return (
        <a className={cn(navItemCls, className)} {...props}>
            {children}
        </a>
    )
}
