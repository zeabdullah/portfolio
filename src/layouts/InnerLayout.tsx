import { useStore } from '@nanostores/react';
import cn from 'clsx';
import themeStore from 'themeStore';

export default function InnerLayout({
    children,
    className,
    ...props
}: React.ComponentPropsWithoutRef<'main'>) {
    const $theme = useStore(themeStore);

    return (
        <div className={cn($theme === 'dark' && 'dark', className)} {...props}>
            {children}
        </div>
    );
}
