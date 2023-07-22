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
                'font-medium underline underline-offset-4 hover:bg-neutral-200 dark:hover:bg-opacity-[0.15]',
                className,
            )}
        >
            {children}
        </a>
    )
}
