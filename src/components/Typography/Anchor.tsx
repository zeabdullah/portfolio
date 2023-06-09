import clsx from 'clsx'

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
            className={clsx(
                'underline underline-offset-4',
                'hover:font-bold hover:bg-neutral-200',
                'dark:bg-opacity-[0.15]',
                className,
            )}
        >
            {children}
        </a>
    )
}
