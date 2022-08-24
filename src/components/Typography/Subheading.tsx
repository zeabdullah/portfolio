import cn from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import P from './P';

export default function Subheading({ children }: ComponentPropsWithoutRef<typeof P>) {
    return <P className={cn('text-gray-600', 'tracking-wider')}>{children}</P>;
}
