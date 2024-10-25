import type { ComponentPropsWithoutRef } from 'react'
import BlinkingCursor from '@/components/BlinkingCursor'
import { cn } from '@/utils/css'

export default function Subtitle({
    children,
    className,
    ...props
}: ComponentPropsWithoutRef<'p'>) {
    return (
        <p
            className={cn(
                'tracking-wide text-neutral-700 dark:text-neutral-200',
                className,
            )}
            {...props}
        >
            {children}
            <BlinkingCursor type='|' />
        </p>
    )
}
