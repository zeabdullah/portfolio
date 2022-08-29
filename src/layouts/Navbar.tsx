import { useState } from 'react';
import { useStore } from '@nanostores/react';
import cn from 'clsx';
import themeStore from 'themeStore';
import { RiMoonClearFill, RiMenuFill, RiCloseLine } from 'react-icons/ri';
import { navItemCls, NavLink } from '@components/NavLink';

const btnClasses = cn(navItemCls, 'p-2', 'text-neutral-600 hover:text-dark');

export default function Navbar(): JSX.Element {
    const [mobileNavActive, setMobileNavActive] = useState(false);

    const $theme = useStore(themeStore);
    const toggleTheme = () => {
        if ($theme === 'light') themeStore.set('dark');
        else themeStore.set('light');
    };

    const toggleMobileNav = () => setMobileNavActive(!mobileNavActive);
    const hideMobileNav = () => setMobileNavActive(false);

    return (
        <>
            <div className={cn('SPACER', 'h-20')} />
            <nav
                id="navbar"
                className={cn(
                    'fixed z-10 top-0 min-w-full',
                    'flex justify-between items-center flex-wrap',
                    'bg-white/90 backdrop-blur-md',
                    'dark:bg-dark/95 dark:text-light',
                    'border-b',
                    'px-3.5 py-4',
                )}
            >
                <div className="flex-grow">
                    <NavLink
                        href="/"
                        aria-label="Home"
                        title="This means home, smartypants."
                        className="text-xl"
                    >
                        ../
                    </NavLink>
                </div>

                <span className="space-x-4">
                    <button
                        className={cn(btnClasses, 'text-2xl')}
                        title="Toggle Theme"
                        onClick={toggleTheme}
                    >
                        <RiMoonClearFill aria-label="Switch to dark" />
                    </button>

                    <button
                        title="Menu"
                        aria-label="Menu"
                        className={cn(btnClasses, 'sm:hidden', 'text-2xl')}
                        onClick={toggleMobileNav}
                    >
                        {mobileNavActive ? <RiCloseLine /> : <RiMenuFill />}
                    </button>
                </span>
                <div
                    className={cn(
                        mobileNavActive
                            ? 'flex flex-col justify-between items-stretch gap-4 basis-full'
                            : 'hidden',
                        'sm:flex sm:flex-row sm:items-center sm:gap-1 sm:basis-auto',
                        'mt-8 sm:mt-auto',
                    )}
                >
                    <NavLink href="#header" onClick={hideMobileNav} children="Intro" />
                    <NavLink href="#projects" onClick={hideMobileNav} children="Projects" />
                    <NavLink href="#tech" onClick={hideMobileNav} children="Technologies" />
                    <NavLink href="#resume" onClick={hideMobileNav} children="Resume" />
                </div>
            </nav>
        </>
    );
}
