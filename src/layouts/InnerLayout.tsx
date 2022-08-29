import { useLayoutEffect, useState } from 'react';
import cn from 'clsx';
import themeStore from 'themeStore';

export default function InnerLayout({
    children,
    className,
    ...props
}: React.ComponentPropsWithoutRef<'main'>) {
    const [isDark, setIsDark] = useState(true);

    useLayoutEffect(() => {
        themeStore.subscribe(theme => {
            setIsDark(theme === 'dark');
        });
    }, []);

    return (
        <div className={cn(isDark && 'dark', className)} {...props}>
            {children}
        </div>
    );
}
