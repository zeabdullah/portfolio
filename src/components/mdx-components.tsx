/* eslint-disable jsx-a11y/heading-has-content */
import type { useMDXComponent } from 'next-contentlayer/hooks'
import { cn } from '@/utils/css'
import Anchor from './typography/Anchor'

const mdxComponents = {
    components: {
        h2: ({ className, ...props }) => (
            <h2 className={cn('group', className)} {...props} />
        ),
        h3: ({ className, ...props }) => (
            <h3 className={cn('group', className)} {...props} />
        ),
        h4: ({ className, ...props }) => (
            <h4 className={cn('group', className)} {...props} />
        ),
        h5: ({ className, ...props }) => (
            <h5 className={cn('group', className)} {...props} />
        ),
        a: props => <Anchor {...props} />,
        code: ({ className, ...props }) => (
            <code
                className={cn(
                    'rounded-md bg-neutral-100 px-1.5 py-0.5 text-sm outline outline-neutral-200 before:hidden after:hidden dark:bg-neutral-800 dark:outline-neutral-700',
                    className,
                )}
                {...props}
            />
        ),
    },
} satisfies ReturnType<typeof useMDXComponent>['defaultProps']

export default mdxComponents
