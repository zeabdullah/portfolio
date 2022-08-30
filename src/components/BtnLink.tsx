import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

export const linkBtnCls = clsx(
    'flex justify-center items-center gap-2',
    'font-bold dark:text-light',
    'bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200',
    'dark:bg-dark dark:hover:bg-neutral-800 dark:focus:bg-neutral-800',
    'border border-neutral-300 hover:border-neutral-400 dark:border-opacity-50',
    'rounded-lg py-2 px-4',
    'transition-[background-color]',
);

export default function BtnLink({ className, ...props }: ComponentPropsWithoutRef<'a'>) {
    return (
        <a className={clsx(linkBtnCls, className)} {...props}>
            {props.children}
        </a>
    );
}
