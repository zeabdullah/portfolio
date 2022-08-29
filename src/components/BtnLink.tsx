import cn from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

export const linkBtnCls = cn(
    'flex justify-center items-center gap-2',
    'font-bold text-md',
    'bg-neutral-100 hover:bg-neutral-200',
    'border border-neutral-300 hover:border-neutral-400',
    'rounded-lg py-2 px-4',
    'transition-colors',
);

export default function BtnLink({ className, ...props }: ComponentPropsWithoutRef<'a'>) {
    return (
        <a className={cn(linkBtnCls, className)} {...props}>
            {props.children}
        </a>
    );
}
