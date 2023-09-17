import { cn } from '@/utils/css'

interface AnchorProps extends React.ComponentPropsWithoutRef<'a'> {
    href: string
    /** Sets `target='blank'` and `rel='noreferrer noopener'` if true */
    external?: boolean
}
export default function Anchor({
    className,
    children,
    external,
    ...props
}: AnchorProps) {
    return (
        <a
            {...props}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer noopener' : undefined}
            className={cn(
                'font-semibold text-brand-700 underline dark:text-brand-400',
                className,
            )}
        >
            {children}
        </a>
    )
}
