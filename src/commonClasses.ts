import cn from 'clsx';

export const btnColors = cn(
    'text-neutral-600 hover:text-dark',
    'dark:text-neutral-400 dark:hover:text-light',
    'hover:bg-neutral-200 dark:hover:bg-opacity-10',
);

export const navAndFooterCls = cn(
    'border-neutral-200 dark:border-opacity-10',
    'transition-[background-color] duration-300',
);
