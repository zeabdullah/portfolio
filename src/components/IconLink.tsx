import cn from 'clsx';
import { btnColors } from 'commonClasses';
// import { IconType } from 'react-icons/lib';

interface IconLinkProps extends React.ComponentPropsWithoutRef<'a'> {
    children: React.ReactNode;
    outer?: boolean;
}
export default function IconLink({ outer, ...props }: IconLinkProps) {
    return (
        <a
            className={cn('p-2 rounded-md', btnColors, 'text-2xl ', props.className)}
            target={outer ? '_blank' : undefined}
            rel={outer ? 'noreferrer noopener' : undefined}
            {...props}
        >
            {props.children}
        </a>
    );
}
