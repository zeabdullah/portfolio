import { cn } from '@/utils/dom'

interface AnchorProps extends React.ComponentPropsWithoutRef<'a'> {
    href: string
    /**
     * Sets `target='blank'` and `rel='noreferrer noopener'` if true
     */
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
                'underline underline-offset-4 hover:bg-neutral-200 hover:font-bold dark:hover:bg-opacity-[0.15]',
                className,
            )}
        >
            {children}
        </a>
    )
}
