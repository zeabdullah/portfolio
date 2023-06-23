import { m } from 'framer-motion'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/css'

type Ref = HTMLParagraphElement
type Props = ComponentPropsWithoutRef<'p'>

const P = forwardRef<Ref, Props>(function P(
    { className, children, ...props },
    ref,
) {
    return (
        <p
            ref={ref}
            className={cn(
                'text-black dark:text-light sm:text-base/relaxed md:text-lg/relaxed',
                className,
            )}
            {...props}
        >
            {children}
        </p>
    )
})
export default P

export const MotionP = m(P)
