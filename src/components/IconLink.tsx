import { m } from 'framer-motion'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { btnColorsCls, focusRingCls } from '@/utils/classnames'
import { cn } from '@/utils/css'
import { tapMotionProps } from '@/utils/motion'

interface IconLinkProps extends ComponentPropsWithoutRef<(typeof m)['a']> {
    children: ReactNode
    external?: boolean
}
export default function IconLink({
    className,
    external,
    ...props
}: IconLinkProps) {
    return (
        <m.a
            className={cn(
                btnColorsCls,
                focusRingCls,
                'inline-flex items-center rounded-md p-2 text-2xl transition-[color,background-color,box-shadow]',
                className,
            )}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer noopener' : undefined}
            {...props}
            {...tapMotionProps}
        >
            {props.children}
        </m.a>
    )
}
