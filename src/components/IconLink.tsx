import clsx from 'clsx';
import { btnColors } from 'commonClasses';

interface IconLinkProps extends React.ComponentPropsWithoutRef<'a'> {
    children: React.ReactNode;
    outer?: boolean;
}
export default function IconLink({ outer, ...props }: IconLinkProps) {
    return (
        <a
            className={clsx('p-2 rounded-md', btnColors, 'text-2xl ', props.className)}
            target={outer ? '_blank' : undefined}
            rel={outer ? 'noreferrer noopener' : undefined}
            {...props}
        >
            {props.children}
        </a>
    );
}
