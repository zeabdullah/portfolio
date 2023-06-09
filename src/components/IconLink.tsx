import { btnColors } from '@/common/classnames'
import { cn } from '@/utils/dom'

interface IconLinkProps extends React.ComponentPropsWithoutRef<'a'> {
    children: React.ReactNode
    external?: boolean
}
export default function IconLink({
    className,
    external,
    ...props
}: IconLinkProps) {
    return (
        <a
            className={cn('p-2 rounded-md', btnColors, 'text-2xl', className)}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer noopener' : undefined}
            {...props}
        >
            {props.children}
        </a>
    )
}
