import { ComponentPropsWithoutRef } from 'react';
import cn from 'clsx';

export default function P({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'p'>): JSX.Element {
    return (
        <p className={cn('mb-5', 'text-sm sm:text-base !leading-loose', className)} {...props}>
            {children}
        </p>
    );
}
