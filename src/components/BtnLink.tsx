import cn from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

export const linkBtnCls = cn(
    'flex justify-center items-center gap-2',
    'font-bold text-md',
    'bg-gray-100 hover:bg-gray-200',
    'border border-gray-300 hover:border-gray-400',
    'rounded-lg py-2 px-4',
);

export default function BtnLink({ className, ...props }: ComponentPropsWithoutRef<'a'>) {
    return (
        <a className={cn(linkBtnCls, className)} {...props}>
            {props.children}
        </a>
    );
}
