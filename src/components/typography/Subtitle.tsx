import type { ComponentPropsWithoutRef } from 'react'
import BlinkingCursor from '@/components/BlinkingCursor'

export default function Subtitle({ children }: ComponentPropsWithoutRef<'p'>) {
    return (
        <p className='tracking-wider text-neutral-600 dark:text-neutral-300'>
            {children}
            <BlinkingCursor type='|' />
        </p>
    )
}
