import { useState } from 'react';
import cn from 'clsx';
import { RiMoonClearFill, RiMenuFill, RiCloseFill } from 'react-icons/ri';
import { navItemCls, NavLink } from '@components/NavLink';

const btnClasses = cn(navItemCls, 'text-neutral-600 hover:text-dark');

export default function Navbar(): JSX.Element {
    const [mobileNavActive, setMobileNavActive] = useState(false);

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
                    'border-b border-b-neutral-200',
                    'bg-white/90 backdrop-blur-md',
                    'px-3.5 py-4',
                    'dark:bg-dark dark:text-light',
                )}
            >
                <div className="flex-grow">
                    <NavLink
                        href="/"
                        aria-label="Home"
                        title="This means home, smartypants."
                        className="text-xl !p-3"
                    >
                        ../
                    </NavLink>
                </div>

                <span>
                    <button
                        className={cn(btnClasses, 'p-3 mr-4', 'text-xl')}
                        title="Toggle Theme"
                        onClick={() => {}}
                    >
                        <RiMoonClearFill aria-label="Switch to dark" />
                    </button>

                    <button
                        title="Menu"
                        aria-label="Menu"
                        className={cn(btnClasses, 'sm:hidden', 'px-3 py-2', 'text-2xl')}
                        onClick={toggleMobileNav}
                    >
                        {mobileNavActive ? <RiCloseFill /> : <RiMenuFill />}
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
