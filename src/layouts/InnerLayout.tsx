import { useEffect, useState } from 'react';
import clsx from 'clsx';
import themeStore from 'themeStore';

export default function InnerLayout({
    children,
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'>) {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const unsub = themeStore.subscribe(theme => setIsDark(theme === 'dark'));
        return unsub;
    }, []);

    return (
        <div className={clsx(isDark && 'dark', className)} {...props}>
            {children}
        </div>
    );
}
