import { m } from 'framer-motion'
import { type ReactNode, useState } from 'react'
import { RiMenuFill, RiCloseLine } from 'react-icons/ri'
import { navAndFooterClassName, navBtnCls } from '@/common/classnames'
import NavItem from '@/components/NavItem'
import ThemeToggler from '@/components/ThemeToggler'
import { cn } from '@/utils/css'
import { tapMotionProps } from '@/utils/motion'

const LINKS: Array<{
    href: string
    children: ReactNode
    pulseEffect?: boolean
}> = [
    { href: '/#projects', children: 'Projects' },
    { href: '/#tech', children: 'Technologies' },
    { href: '/#resume', children: 'Resume' },
    { href: '/blog', children: 'Blog', pulseEffect: true }, // TODO: under construction 🚧
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
                    'sticky top-0 z-50 flex min-w-full flex-wrap items-center justify-between gap-x-3 border-b backdrop-blur-[10px] dark:bg-dark dark:text-light sm:flex-nowrap md:gap-x-2',
                    mobileNavActive
                        ? 'bg-neutral-100 !bg-opacity-90 dark:!bg-opacity-90'
                        : 'bg-light bg-opacity-70 dark:bg-opacity-70',
                    navAndFooterClassName,
                )}
            >
                <NavItem
                    element='next-link'
                    href='/'
                    aria-label='Home'
                    className='me-auto font-mono text-2xl font-bold max-sm:px-2'
                >
                    {'<Z/>'}
                </NavItem>

                <div className='inline-flex items-center gap-x-3 md:gap-x-2'>
                    <ThemeToggler />
                    <m.button
                        type='button'
                        title='Menu'
                        aria-label='Menu'
                        className={cn(navBtnCls, 'text-2xl sm:hidden')}
                        onClick={toggleNavCollapse}
                        {...tapMotionProps}
                    >
                        {mobileNavActive ? <RiCloseLine /> : <RiMenuFill />}
                    </m.button>
                </div>

                <div
                    className={cn(
                        'mt-8 sm:mt-0 sm:flex sm:basis-auto sm:flex-row sm:items-center sm:gap-1',
                        mobileNavActive
                            ? 'flex basis-full flex-col items-stretch justify-between gap-4'
                            : 'hidden',
                    )}
                >
                    {LINKS.map(props => (
                        <NavItem
                            element='next-link'
                            {...props}
                            key={props.href}
                            onClick={hideMobileNav}
                        />
                    ))}
                </div>
            </nav>
        </>
    )
}
