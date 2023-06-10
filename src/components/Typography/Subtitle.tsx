import type { ComponentPropsWithoutRef } from 'react'
import BlinkingCursor from '@/components/BlinkingCursor'
import type P from './P'

export default function Subtitle({
    children,
}: ComponentPropsWithoutRef<typeof P>) {
    return (
        <p className='tracking-wider text-neutral-600 dark:text-neutral-300'>
            {children}
            <BlinkingCursor type='|' />
        </p>
    )
}
