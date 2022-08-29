import cn from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

export const navItemCls = cn(
    'text-neutral-500',
    'hover:bg-neutral-100 hover:text-dark',
    'rounded-md',
);

export function NavLink({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'a'>): JSX.Element {
    return (
        <a className={cn(navItemCls, 'px-5 py-2', className)} {...props}>
            {children}
        </a>
    );
}
