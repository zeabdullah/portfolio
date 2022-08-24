import cn from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

export function NavLink({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'a'>): JSX.Element {
    return (
        <a
            className={cn('hover:bg-gray-200', 'px-5 py-1.5', 'rounded-md', className)}
            {...props}
        >
            {children}
        </a>
    );
}
