import { useEffect, useState } from 'react';
import cn from 'clsx';
import themeStore from 'themeStore';

export default function InnerLayout({
    children,
    className,
    ...props
}: React.ComponentPropsWithoutRef<'main'>) {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const unsub = themeStore.subscribe(theme => {
            setIsDark(theme === 'dark');
        });

        return unsub;
    }, []);

    return (
        <div className={cn(isDark && 'dark', className)} {...props}>
            {children}
        </div>
    );
}
