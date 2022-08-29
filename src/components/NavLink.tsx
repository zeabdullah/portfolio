import cn from 'clsx';
import { btnColors } from 'commonClasses';
import { ComponentPropsWithoutRef } from 'react';

export const navItemCls = cn('px-5 py-2', 'rounded-md', btnColors);

export function NavLink({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'a'>): JSX.Element {
    return (
        <a className={cn(navItemCls, className)} {...props}>
            {children}
        </a>
    );
}
