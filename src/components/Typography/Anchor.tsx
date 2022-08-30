import cn from 'clsx';

interface AnchorProps extends React.ComponentPropsWithoutRef<'a'> {
    href: string;
    outer?: boolean;
}
export default function Anchor({ children, outer, ...props }: AnchorProps) {
    return (
        <a
            {...props}
            target={outer ? '_blank' : undefined}
            rel={outer ? 'noreferrer noopener' : undefined}
            className={cn(
                'underline underline-offset-4',
                'hover:font-bold focus:font-bold',
                'hover:bg-neutral-200 focus:bg-neutral-200',
                'dark:bg-opacity-[0.15]',
            )}
        >
            {children}
        </a>
    );
}
