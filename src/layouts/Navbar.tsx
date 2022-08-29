import { useLayoutEffect, useState } from 'react';
import cn from 'clsx';
import themeStore, { toggleTheme } from 'themeStore';
import { RiMoonClearFill, RiMenuFill, RiCloseLine, RiSunFill } from 'react-icons/ri';
import { navItemCls, NavLink } from '@components/NavLink';
import { navAndFooterCls } from 'commonClasses';

const btnClasses = cn(navItemCls, 'p-2', 'text-neutral-600 hover:text-dark');

export default function Navbar(): JSX.Element {
    const [isDark, setIsDark] = useState(true);
    const [mobileNavActive, setMobileNavActive] = useState(false);

    useLayoutEffect(() => {
        themeStore.subscribe(theme => {
            setIsDark(theme === 'dark');
        });
    }, []);

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
                    mobileNavActive ? 'bg-neutral-100' : 'bg-light',
                    'bg-opacity-90 backdrop-blur-md',
                    'dark:bg-dark/95 dark:text-light',
                    'px-3.5 py-4',
                    'border-b',
                    navAndFooterCls,
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
                        aria-label="Toggle Theme"
                        onClick={() => toggleTheme()}
                    >
                        {isDark ? <RiSunFill /> : <RiMoonClearFill />}
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
