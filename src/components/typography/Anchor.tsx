import { cn } from '@/utils/css'

interface AnchorProps extends React.ComponentPropsWithoutRef<'a'> {
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
                'font-semibold text-brand-700 underline transition-colors hover:text-dark dark:text-brand-400 dark:hover:text-light',
                className,
            )}
        >
            {children}
        </a>
    )
}
