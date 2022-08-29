import cn from 'clsx';
// import { IconType } from 'react-icons/lib';

interface IconLinkProps extends React.ComponentPropsWithoutRef<'a'> {
    children: React.ReactNode;
}
export default function IconLink(props: IconLinkProps) {
    return (
        <a
            {...props}
            className={cn(
                'p-2 rounded-md',
                'text-2xl text-neutral-600 hover:text-dark',
                'hover:bg-neutral-100',
                props.className,
            )}
        >
            {props.children}
        </a>
    );
}
