import clsx from 'clsx';
import { navItemCls } from 'commonClasses';
import { ComponentPropsWithoutRef } from 'react';

export function NavLink({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'a'>): JSX.Element {
    return (
        <a className={clsx(navItemCls, className)} {...props}>
            {children}
        </a>
    );
}
