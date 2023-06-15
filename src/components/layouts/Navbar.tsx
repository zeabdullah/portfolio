import { useState } from 'react'
import { RiMenuFill, RiCloseLine } from 'react-icons/ri'
import { navAndFooterClassName, navBtnCls } from '@/common/classnames'
import { NavLink } from '@/components/NavLink'
import ThemeToggler from '@/components/ThemeToggler'
import { cn } from '@/utils/dom'

const LINKS = [
    { id: 'l-hero', href: '#', children: 'Intro' },
    { id: 'l-projects', href: '#projects', children: 'Projects' },
    { id: 'l-tech', href: '#tech', children: 'Technologies' },
    { id: 'l-resume', href: '#resume', children: 'Resume' },
]

export default function Navbar() {
    const [mobileNavActive, setMobileNavActive] = useState(false)

    const toggleNavCollapse = () => setMobileNavActive(!mobileNavActive)
    const hideMobileNav = () => setMobileNavActive(false)

    return (
        <>
            <nav
                id='navbar'
                className={cn(
                    'sticky top-0 z-10 flex min-w-full flex-wrap items-center justify-between border-b backdrop-blur-[10px] dark:bg-dark dark:text-light sm:flex-nowrap',
                    mobileNavActive
                        ? 'bg-neutral-100 !bg-opacity-90 dark:!bg-opacity-90'
                        : 'bg-light bg-opacity-70 dark:bg-opacity-70',
                    navAndFooterClassName,
                )}
            >
                <div className='flex-grow'>
                    <NavLink
                        href='/'
                        aria-label='Home'
                        className='text-2xl font-bold'
                    >
                        &lt;Z/&gt;
                    </NavLink>
                </div>

                <span className='space-x-4'>
                    <ThemeToggler />
                    <button
                        type='button'
                        title='Menu'
                        aria-label='Menu'
                        className={cn(navBtnCls, 'text-2xl sm:hidden')}
                        onClick={toggleNavCollapse}
                    >
                        {mobileNavActive ? <RiCloseLine /> : <RiMenuFill />}
                    </button>
                </span>
                <div
                    className={cn(
                        'mt-8 sm:mt-auto sm:flex sm:basis-auto sm:flex-row sm:items-center sm:gap-1',
                        mobileNavActive
                            ? 'flex basis-full flex-col items-stretch justify-between gap-4'
                            : 'hidden',
                    )}
                >
                    {LINKS.map(({ id, ...props }) => (
                        <NavLink {...props} key={id} onClick={hideMobileNav} />
                    ))}
                </div>
            </nav>
        </>
    )
}
