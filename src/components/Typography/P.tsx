import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export default function P({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'p'>): JSX.Element {
    return (
        <p
            className={clsx(
                'mb-4',
                'text-sm sm:text-base',
                '!leading-relaxed tracking-wide',
                className,
            )}
            {...props}
        >
            {children}
        </p>
    );
}
