import BlinkingCursor from '@components/BlinkingCursor'
import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'
import P from './P'

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
