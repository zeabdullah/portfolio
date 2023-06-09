import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import BlinkingCursor from '@/components/BlinkingCursor'
import type P from './P'

export default function Subtitle({
    children,
}: ComponentPropsWithoutRef<typeof P>) {
    return (
        <p
            className={clsx(
                'text-neutral-600 dark:text-neutral-300 tracking-wider',
            )}
        >
            {children}
            <BlinkingCursor type='|' />
        </p>
    )
}
