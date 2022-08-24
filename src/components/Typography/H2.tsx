import { ComponentPropsWithoutRef } from 'react';
import cn from 'clsx';

export default function H2({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'h2'>): JSX.Element {
    return (
        <h2 className={cn('text-xl sm:text-2xl font-bold', 'mb-2', className)} {...props}>
            {children}
        </h2>
    );
}
