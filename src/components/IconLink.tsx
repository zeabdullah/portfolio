import cn from 'clsx';
import { btnColors } from 'commonClasses';
// import { IconType } from 'react-icons/lib';

interface IconLinkProps extends React.ComponentPropsWithoutRef<'a'> {
    children: React.ReactNode;
}
export default function IconLink(props: IconLinkProps) {
    return (
        <a
            {...props}
            className={cn('p-2 rounded-md', btnColors, 'text-2xl ', props.className)}
        >
            {props.children}
        </a>
    );
}
