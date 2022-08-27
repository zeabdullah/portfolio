import BlinkingCursor from '@components/BlinkingCursor';
import cn from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import P from './P';

export default function Subtitle({ children }: ComponentPropsWithoutRef<typeof P>) {
    return (
        <p className={cn('text-gray-600 tracking-wider')}>
            {children}
            <BlinkingCursor type="|" />
        </p>
    );
}
