import { ComponentPropsWithoutRef } from 'react';
import cn from 'clsx';

export default function Section({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'section'>): JSX.Element {
    return (
        <section className={cn(className ? className : 'mb-10')} {...props}>
            {children}
        </section>
    );
}
