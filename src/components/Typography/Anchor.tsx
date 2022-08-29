import cn from 'clsx';

interface AnchorProps extends React.ComponentPropsWithoutRef<'a'> {
    href: string;
}
export default function Anchor({ children, ...props }: AnchorProps) {
    return (
        <a
            {...props}
            className={cn(
                'underline underline-offset-4',
                'hover:font-bold focus:font-bold',
                'hover:bg-neutral-200 focus:bg-neutral-200',
                'dark:bg-opacity-20',
            )}
        >
            {children}
        </a>
    );
}
