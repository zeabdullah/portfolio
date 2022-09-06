import clsx from 'clsx';
import { useTheme } from 'themeStore';

export default function InnerLayout({
    children,
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'>) {
    const { isDarkMode } = useTheme();

    return (
        <div className={clsx(isDarkMode && 'dark', className)} {...props}>
            {children}
        </div>
    );
}
