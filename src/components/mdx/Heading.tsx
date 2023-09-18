import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/css'

const tags = ['h2', 'h3', 'h4', 'h5'] as const

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level: 2 | 3 | 4 | 5
}

export default function Heading({ level, className, ...props }: HeadingProps) {
    const Element = tags[level - 1]

    return <Element className={cn('group', className)} {...props} />
}
